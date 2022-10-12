"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSeance = exports.getAllSeances = void 0;
const seanceModel_1 = __importDefault(require("../models/seanceModel"));
const getAllSeances = (req, res) => {
    seanceModel_1.default.findAll().then((seances) => {
        res.status(200).json(seances);
    })
        .catch((err) => {
        res.status(409).send(err);
    });
    //res.status(200).send("Getting all seances");
};
exports.getAllSeances = getAllSeances;
const getSeance = (req, res) => {
    res.status(200).send("Getting seance " + req.params.id);
};
exports.getSeance = getSeance;
