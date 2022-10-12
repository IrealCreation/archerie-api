import express from "express";
const router = express.Router();
import { getAllSeances, getSeance } from '../controllers/seanceController';

router.get("/", getAllSeances);

router.get("/:id", getSeance);

export default router;
