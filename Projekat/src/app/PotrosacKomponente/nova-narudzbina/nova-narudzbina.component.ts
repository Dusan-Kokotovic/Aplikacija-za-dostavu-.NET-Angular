import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Jelo } from 'src/app/models/jelo.model';
import { Porudzbina } from 'src/app/models/porudzbina.model';

@Component({
  selector: 'app-nova-narudzbina',
  templateUrl: './nova-narudzbina.component.html',
  styleUrls: ['./nova-narudzbina.component.css']
})
export class NovaNarudzbinaComponent implements OnInit {

  constructor() { }

  cijena:number = 0;
  namirnice: string = "";


  Lista : Jelo[] = [
    {jelo: "Pica",cijena:1000,sastojci:"tijesto,kecap,sir,sunka,origano"},
    {jelo: "Cevapi",cijena:1000,sastojci:"tijesto,kecap,sir,sunka,origano"},
    {jelo: "Sarma",cijena:1000,sastojci:"tijesto,kecap,sir,sunka,origano"},
    {jelo: "Luk",cijena:1000,sastojci:"tijesto,kecap,sir,sunka,origano"}
  ]

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
  }

  onSubmit(){

  }

  Dodaj(item: Jelo){
  this.cijena += item.cijena * this.kolicinaForm.controls["kolicina"].value;
  if(this.namirnice == ""){
    this.namirnice += this.kolicinaForm.controls["kolicina"].value + "x" + item.jelo;
  }
  else{
  this.namirnice += ", " + this.kolicinaForm.controls["kolicina"].value + "x" + item.jelo;
  }
  console.log(item);
  }

}
