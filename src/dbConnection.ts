import { Sequelize } from 'sequelize';
import { Sequelize as SequelizeTS } from 'sequelize-typescript';

// Connexion à la base de données
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  dialect: "mysql",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
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
