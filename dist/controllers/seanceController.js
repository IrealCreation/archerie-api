"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSeance = void 0;
const getSeance = (req, res) => {
    console.log("Getting seance " + req.params.id);
    res.status(200).send("Getting seance " + req.params.id);
};
exports.getSeance = getSeance;
