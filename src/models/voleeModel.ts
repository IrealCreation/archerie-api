import { Table, Model, Column, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { sequelizeTS } from "../dbConnection";
import { Seance } from "./seanceModel";

@Table
export class Volee extends Model {

    @Column
    numero!: number;

    @Column
    distance!: number;

    @Column
    blason!: number;
}

sequelizeTS.addModels([Volee]);