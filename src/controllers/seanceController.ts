import express, { Express, Request, Response } from 'express';
import { Seance } from "../models/seanceModel";
// import Seance from "../types/seanceType";

export const getAllSeances = (req: Request, res: Response) => {
    Seance.findAll()
    // TODO: remove the any
    .then((seances: Seance[]) => {
        res.status(200).json(seances);
    })
    .catch((err: Error) => {
        res.status(409).send(err);
    });
};

export const getSeance = (req: Request, res: Response) => {
    res.status(200).send("Getting seance " + req.params.id);
};
