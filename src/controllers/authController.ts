import jwt from "jsonwebtoken";
import Express from "express";
import bcrypt from "bcryptjs";
import { IsEmail } from "sequelize-typescript";
import { Error } from 'sequelize/types';
import { Op } from "sequelize";
import { Compte } from "../models/compteModel";

//fonction permettant de créer un access token
const createAccessToken = (id: number) => {
  if (typeof process.env.ACCESS_TOKEN_SECRET === "string") {
    //on retourne un token suivant l'id de l'utilisateur, qui expires dans 1h
    return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1 hours" })
  }
}

//fonction permettant de créer un refresh token
const createRefreshToken = (id: number) => {
  if (typeof process.env.REFRESH_TOKEN_SECRET === "string") {
    return jwt.sign({ id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "1d" }) // expiresIn: "1d" (1 jour)
  }
}

// Connexion d'un utilisateur
export const signIn = (req: Express.Request, res: Express.Response) => {

  Compte.findOne({ 
    where: { email: req.body.email } 
  })
  .then((compte: Compte | null) => {

    if(compte == null) {
      return res.status(401).json("Email inconnu.");
    }

    const auth: boolean = bcrypt.compareSync(req.body.password, compte.mdp);

    if (auth) {

      const accessToken = createAccessToken(compte.id);
      const refreshToken = createRefreshToken(compte.id);

      // Enregistrer le refreshToken avec l'utilisateur actuel
      Compte.update({ refreshToken: refreshToken }, { where: { id: compte.id } })

      if (accessToken && refreshToken) {

        // le refresh token va être stocké en cookie
        // httpOnly: true signifie que le cookie ne peut pas être accédé par javascript
        // En prod: httpOnly: true, sameSite: "none", secure: true (marche que pour https)
        res.cookie("jwt", refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 }); // maxAge: 1day

        // envoyer l'access token, il va être stocké en mémoire, 
        // ce n'est pas sécurisé en localStorage/Session ou cookie
        res.status(200).send({ compte, accessToken });
      } 
      else {
        return res.status(500).json("Erreur à la création du token.");
      }
        
    } 
    else {
      return res.status(401).json("Mot de passe incorrect");
    }
  })
  .catch((err: Error) => {
    return res.status(401).send("Email inconnu");
  });
}