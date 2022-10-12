"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("./config");
// Connexion à la base de données
const dbConnection = new sequelize_1.Sequelize(config_1.DB_DATABASE, config_1.DB_USER, config_1.DB_PASSWORD, {
    dialect: "mysql",
    host: config_1.DB_HOST,
    port: config_1.DB_PORT,
    connectionLimit: 5
});
exports.default = dbConnection;
