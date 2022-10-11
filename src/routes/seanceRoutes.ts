import express from "express";
const router = express.Router();

// TODO: importer les fonctions depuis le controller
router.get("/:id", getSeance);

export default router;
