import { Table, Model, Column, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { sequelizeTS } from "../dbConnection";
import { Seance } from "./seanceModel";

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
export class Volee extends Model {

    @Column
    numero!: number;

    @Column
    distance!: number;

    @Column
    blason!: number;

    @ForeignKey(() => Seance)
    @Column
    seanceId!: number;
}

sequelizeTS.addModels([Volee]);