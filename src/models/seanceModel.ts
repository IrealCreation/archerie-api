import { Sequelize, Model, DataTypes } from 'sequelize';
import dbConnection from "../dbConnection";

const seanceModel = dbConnection.define("seance", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNul: false,
        primaryKey: true
    },
    date: {
        type: DataTypes.DATE,
        allowNul: false
    },
});

export default seanceModel;
