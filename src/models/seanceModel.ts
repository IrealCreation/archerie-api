import { Optional } from 'sequelize';
import { Table, Model, Column, DataType } from 'sequelize-typescript';
import { sequelize, sequelizeTS } from "../dbConnection";

// Old system without TypeScript
// import { Sequelize, Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
// const seanceModel = dbConnection.define(
//     "seance", {
//         id: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             allowNull: false,
//             primaryKey: true
//         },
//         date: {
//             type: DataTypes.DATE,
//             allowNull: false
//         },
//     }
// );

@Table
export class Seance extends Model {
    // Column "id" added automatically

    @Column
    date!: Date; // The ! postfix operator avoids a "property has no initializer" error
}

sequelizeTS.addModels([Seance]);
