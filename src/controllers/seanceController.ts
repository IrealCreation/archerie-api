import express, { Express, Request, Response } from 'express';

export const getSeance = (req: Request, res: Response) => {
    console.log("Getting seance " + req.params.id);
};
