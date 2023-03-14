import express, { Express, Request, Response } from 'express';
import { Seance } from "../models/seanceModel";
import { Volee } from "../models/voleeModel";
import moment from 'moment';
import { encode } from 'html-entities';

export const getAllSeances = (req: Request, res: Response) => {
    Seance.findAll({
        include: Volee // Eager loading
    })
    .then((seances: Seance[]) => {
        res.status(200).json(seances);
    })
    .catch((err: Error) => {
        res.status(409).send(err);
    });
};

export const getSeance = (req: Request, res: Response) => {
    Seance.findByPk(req.params.id, {
        include: Volee 
    })
    .then((seance: Seance | null) => {
        res.status(200).json(seance);
    })
    .catch((err: Error) => {
        res.status(409).send(err);
    });
};

export const createSeance = (req: Request, res: Response) => {
    // Vérifications des données de la requête
    let errors = [];

    if(typeof req.body.date == undefined || !moment(req.body.date).isValid()) {
        errors.push("Format de date incorrect");
    }

    if(errors.length > 0) {
        res.status(422).json(errors);
    }
    else {
        // Les données sont ok, créons la séance
        const date = req.body.date;
        const focus = (typeof req.body.focus == undefined ? null : encode(req.body.focus));
        const commentaire = (typeof req.body.commentaire == undefined ? null : encode(req.body.commentaire));

        // On récupère l'id de l'utilisateur authentifié dans le middleware
        // const compteId = req.user.id;
        const compteId = 1;

        Seance.create({
            date: date,
            focus: focus,
            commentaire: commentaire,
            compteId: compteId
        })
        .then((seance: Seance | null) => {
            res.status(201).send("Séance créée");
        })
        .catch((err: Error) => {
            res.status(409).send(err);
        });
    }
};