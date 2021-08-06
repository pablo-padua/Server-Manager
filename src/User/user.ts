import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import "reflect-metadata";


export class User implements BaseEntity {

    public login !: string;

    public name !: string;

    public password !: string;

    public email !: string;

    public birthdate !: Date;


    constructor() {

    }

}