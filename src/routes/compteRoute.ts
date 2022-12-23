import express from "express";
import { getCompte } from '../controllers/compteController';

const router = express.Router();

router.get("/", getCompte);

export default router;
