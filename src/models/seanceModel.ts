import Sequelize from "sequelize";
import dbConnection from "../dbConnection";

export const seanceModel = dbConnection.define("seance", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNul: false,
        primaryKey: true
    },
    date: {
        type: Sequelize.DATE,
        allowNul: false
    },
});
