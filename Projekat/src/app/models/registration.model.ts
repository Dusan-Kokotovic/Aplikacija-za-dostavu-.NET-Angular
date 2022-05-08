import { Porudzbina } from "./porudzbina.model";

export class Registration{
    id : number = 0;
    username:string = "";
    name: string = "";
    password: string = "";
    email: string = "";
    adress : string = "";
    date : Date = new Date();
    status : string = "";
    role : string = "";
    image : string = "";
    porudzbine: Porudzbina[] = [];
    token : string = "";
}