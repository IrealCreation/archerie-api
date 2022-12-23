import express from "express";
import { getAllSeances, getSeance } from '../controllers/seanceController';

const router = express.Router();

router.get("/", getAllSeances);

router.get("/:id", getSeance);

export default router;
