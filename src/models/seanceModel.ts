import { Sequelize, Model, DataTypes } from 'sequelize';
import dbConnection from "../dbConnection";

const seanceModel = dbConnection.define("seance", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
});

export default seanceModel;
