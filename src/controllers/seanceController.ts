import express, { Express, Request, Response } from 'express';

export const getAllSeances = (req: Request, res: Response) => {
    res.status(200).send("Getting all seances");
};

export const getSeance = (req: Request, res: Response) => {
    res.status(200).send("Getting seance " + req.params.id);
};
