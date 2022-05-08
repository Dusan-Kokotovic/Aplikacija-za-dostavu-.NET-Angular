import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Jelo } from 'src/app/models/jelo.model';
import { Porudzbina } from 'src/app/models/porudzbina.model';
import { JeloService } from 'src/app/Services/jelo.service';
import { PorudzbinaService } from 'src/app/Services/porudzbina.service';

@Component({
  selector: 'app-nova-narudzbina',
  templateUrl: './nova-narudzbina.component.html',
  styleUrls: ['./nova-narudzbina.component.css']
})
export class NovaNarudzbinaComponent implements OnInit {

  constructor(private router: Router,private service: JeloService, private service2:PorudzbinaService) { }

  cijena:number = 0;
  namirnice: string = "";
  kolicina:number = 0;


  Lista : Jelo[] = []

  porudzbina: Porudzbina = new Porudzbina();

  porudzbinaForm = new FormGroup({
    adress : new FormControl("", Validators.required),
    comment : new FormControl("", Validators.required),
    food : new FormControl("", Validators.required),
    price : new FormControl("", [ 
      Validators.required
    /*Validators.pattern(new RegExp("[a-zA-Z ]*"))*/]),
  });
  kolicinaForm = new FormGroup({
    kolicina : new FormControl("", Validators.required),
  });

  ngOnInit(): void {
    this.service.getJela().subscribe(
      (data:Jelo[]) =>{
         this.Lista = data;
      }
    )
  }

  onSubmit(){
  this.porudzbina.adress = this.porudzbinaForm.controls["adress"].value;
  this.porudzbina.price = this.cijena;
  this.porudzbina.deliveryTime = new Date();
  this.porudzbina.articles = this.namirnice;
  this.porudzbina.status = "Aktivna";
  this.porudzbina.comment = this.porudzbinaForm.controls["comment"].value;
  this.porudzbina.clientId = 2;
  console.log(this.porudzbina);
  this.service2.addPorudzbina(this.porudzbina).subscribe(
    (data:Porudzbina) =>{}
  )
  }

  Dodaj(item: Jelo){
  var kol :number=0
  var broj = parseFloat(this.kolicinaForm.controls["kolicina"].value);
  if(isNaN(broj)){
    kol = 1;
  }
  else{
    kol = this.kolicinaForm.controls["kolicina"].value;
  }
  this.cijena += item.cijena * kol
  if(this.namirnice == ""){
    this.namirnice += kol + "x" + item.naziv;
  }
  else{
  this.namirnice += ", " + kol + "x" + item.naziv;
  }
  }

}
