import jwt from "jsonwebtoken";
import Express, { NextFunction } from "express";

const token_secret = process.env.ACCESS_TOKEN_SECRET as string;

// Vérification du token de l'utilisateur
const isAuth = (req: Express.Request, res: Express.Response, next: NextFunction) => {
    // On récupère le token transmis dans la requête "as a Bearer credential in an HTTP Authorization header"
    const token = req.header("Authorization")?.replace("Bearer ", "");

    // Si l'utilisateur n'a pas de token, accès refusé
    if (!token) {
        return res.status(401).send("Accès refusé");
    }
    
    // Utilisons la méthode verify de JSON Web Token pour vérifier si le token est valide ou non
    jwt.verify(token, token_secret, (err, decoded) => {
        if (err) {
            return res.status(403).send("Token invalide");
        }
        req.token = decoded;

        // Tout est ok, on passe à la prochaine fonction dans la route
        next();
    });
}

export default isAuth;