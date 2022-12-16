import { Sequelize } from 'sequelize';

import { DB_HOST, DB_DATABASE, DB_PASSWORD, DB_PORT, DB_USER } from "./config";

// Connexion à la base de données
const dbConnection = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  dialect: "mysql",
  host: DB_HOST,
  port: DB_PORT,
  define: {
    timestamps: false
  }
});

export default dbConnection;
