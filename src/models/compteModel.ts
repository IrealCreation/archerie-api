import { Table, Model, Column, HasMany } from 'sequelize-typescript';
import { sequelizeTS } from "../dbConnection";
import { Seance } from "./seanceModel";

@Table
export class Compte extends Model {

    @Column
    nom!: string;

    @Column
    email!: string;

    @Column
    mdp!: string;

    @Column
    dateInscription!: Date;

    // @HasMany(() => Seance)
    // seances!: Seance[];
}

sequelizeTS.addModels([Compte]);
