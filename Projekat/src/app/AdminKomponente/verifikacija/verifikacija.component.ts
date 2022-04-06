import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Registration } from 'src/app/models/registration.model';

@Component({
  selector: 'app-verifikacija',
  templateUrl: './verifikacija.component.html',
  styleUrls: ['./verifikacija.component.css']
})


export class VerifikacijaComponent implements OnInit {

  Lista: Registration[] = [
    { role:"dostavljac", username: "dule", name:"Dusan",lastName:"Kokotovic",adress:"Filipa Filipovica",password: "",gmail:"kokotovic@gmai.com", date:new Date(),status:"cekanje" },
    {role:"dostavljac", username: "mitar", name:"Dusan",lastName:"Kokotovic",adress:"Filipa Filipovica",password: "",gmail:"kokotovic@gmai.com", date:new Date(),status:"aktivan" },  
    {role:"dostavljac", username: "petar", name:"Dusan",lastName:"Kokotovic",adress:"Filipa Filipovica",password: "",gmail:"kokotovic@gmai.com", date:new Date(),status:"cekanje" },  
    {role:"dostavljac", username: "jovan", name:"Dusan",lastName:"Kokotovic",adress:"Filipa Filipovica",password: "",gmail:"kokotovic@gmai.com", date:new Date(),status:"aktivan" },  
    {role:"dostavljac", username: "stefan", name:"Dusan",lastName:"Kokotovic",adress:"Filipa Filipovica",password: "",gmail:"kokotovic@gmai.com", date:new Date(),status:"cekanje" },  
    {role:"dostavljac", username: "radan", name:"Dusan",lastName:"Kokotovic",adress:"Filipa Filipovica",password: "",gmail:"kokotovic@gmai.com", date:new Date(),status:"aktivan" }
  ];
  

  verifyForm = new FormGroup({
    username : new FormControl("", Validators.required),
  });


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(un:string){
    console.log(un);
  }

}
