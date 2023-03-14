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

    // seance_id as seanceId 
}

sequelizeTS.addModels([Volee]);