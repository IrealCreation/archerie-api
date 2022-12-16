import express, { Express, Request, Response } from 'express';
import seanceModel from "../models/seanceModel";
import Seance from "../types/seanceType";

export const getAllSeances = (req: Request, res: Response) => {
  seanceModel.findAll()
    .then((seances: any) => {
    // .then((seances: any) => {
        res.status(200).json(seances);
    })
    .catch((err: Error) => {
        res.status(409).send(err);
    });
    //res.status(200).send("Getting all seances");
};

export const getSeance = (req: Request, res: Response) => {
    res.status(200).send("Getting seance " + req.params.id);
};
