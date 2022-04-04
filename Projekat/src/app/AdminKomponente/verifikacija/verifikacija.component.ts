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
    { username: "dule", name:"Dusan",lastName:"Kokotovic",adress:"Filipa Filipovica",password: "",gmail:"kokotovic@gmai.com", date:new Date(),status:"cekanje" },
    { username: "mitar", name:"Dusan",lastName:"Kokotovic",adress:"Filipa Filipovica",password: "",gmail:"kokotovic@gmai.com", date:new Date(),status:"aktivan" },  
    { username: "petar", name:"Dusan",lastName:"Kokotovic",adress:"Filipa Filipovica",password: "",gmail:"kokotovic@gmai.com", date:new Date(),status:"cekanje" },  
    { username: "jovan", name:"Dusan",lastName:"Kokotovic",adress:"Filipa Filipovica",password: "",gmail:"kokotovic@gmai.com", date:new Date(),status:"aktivan" },  
    { username: "stefan", name:"Dusan",lastName:"Kokotovic",adress:"Filipa Filipovica",password: "",gmail:"kokotovic@gmai.com", date:new Date(),status:"cekanje" },  
    { username: "radan", name:"Dusan",lastName:"Kokotovic",adress:"Filipa Filipovica",password: "",gmail:"kokotovic@gmai.com", date:new Date(),status:"aktivan" }
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
