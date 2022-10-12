"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConnection_1 = __importDefault(require("../dbConnection"));
const seanceModel = dbConnection_1.default.define("seance", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNul: false,
        primaryKey: true
    },
    date: {
        type: sequelize_1.DataTypes.DATE,
        allowNul: false
    },
});
exports.default = seanceModel;
