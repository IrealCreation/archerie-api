import { Request, Response } from 'express';
import { Compte } from "../models/compteModel";
import { Seance } from "../models/seanceModel";

export const getCompte = (req: Request, res: Response) => {
    // TODO: find the Pk from the authentification
    Compte.findByPk(1, {
        include: Seance
    })
    .then((compte: Compte | null) => {
        res.status(200).json(compte);
    })
    .catch((err: Error) => {
        res.status(409).send(err);
    });
};
