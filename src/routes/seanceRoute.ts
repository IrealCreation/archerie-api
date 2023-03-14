import express from "express";
import { getAllSeances, getSeance, createSeance } from '../controllers/seanceController';

const router = express.Router();

router.get("/", getAllSeances);

router.get("/:id", getSeance);

router.post("/", createSeance);

export default router;
