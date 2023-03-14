import { Sequelize } from 'sequelize';
import { Sequelize as SequelizeTS } from 'sequelize-typescript';

const database = process.env.DB_DATABASE as string;
const user = process.env.DB_USER as string;
const password = process.env.DB_PASSWORD as string;
const host = process.env.DB_HOST as string;
const port = parseInt(process.env.DB_PORT as string);

// Connexion à la base de données
const sequelize = new Sequelize(database, user, password, {
  dialect: "mysql",
  host: host,
  port: port,
  define: {
    timestamps: false,
    freezeTableName: true
  }
});

const sequelizeTS = new SequelizeTS({
  database: process.env.DB_DATABASE,
  dialect: 'mysql',
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  models: ['Compte', 'Seance', 'Volee'],
  define: {
    timestamps: false,
    freezeTableName: true,
    underscored: true
  }
});

export { sequelize, sequelizeTS };
