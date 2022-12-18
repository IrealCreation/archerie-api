import express from "express";
import { signIn } from "../controllers/authController";

const router = express.Router();

router.post("/login", signIn);

export default router;