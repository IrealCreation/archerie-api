import { Sequelize } from 'sequelize';
import { Sequelize as SequelizeTS } from 'sequelize-typescript';

import { DB_HOST, DB_DATABASE, DB_PASSWORD, DB_PORT, DB_USER } from "./config";

// Connexion à la base de données
const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  dialect: "mysql",
  host: DB_HOST,
  port: DB_PORT,
  define: {
    timestamps: false,
    freezeTableName: true
  }
});

const sequelizeTS = new SequelizeTS({
  database: DB_DATABASE,
  dialect: 'mysql',
  username: DB_USER,
  password: DB_PASSWORD,
  models: ['Compte', 'Seance', 'Volee'],
  define: {
    timestamps: false,
    freezeTableName: true,
    underscored: true
  }
});

export { sequelize, sequelizeTS };
