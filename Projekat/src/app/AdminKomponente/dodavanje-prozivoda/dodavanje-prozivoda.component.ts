import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Jelo } from 'src/app/models/jelo.model';

@Component({
  selector: 'app-dodavanje-prozivoda',
  templateUrl: './dodavanje-prozivoda.component.html',
  styleUrls: ['./dodavanje-prozivoda.component.css']
})
export class DodavanjeProzivodaComponent implements OnInit {

  jeloForm = new FormGroup({
    name : new FormControl("", Validators.required),
    dishes : new FormControl("", Validators.required),
    price : new FormControl("", [ 
      Validators.required
    /*Validators.pattern(new RegExp("[a-zA-Z ]*"))*/]),
  });

  Lista : Jelo[] = [
    {jelo: "Pica",cijena:1000,sastojci:"tijesto,kecap,sir,sunka,origano"}
  ]


  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(){
    if(this.jeloForm.valid){
    let novo = new Jelo()
    novo.jelo = this.jeloForm.controls["name"].value;
    novo.sastojci = this.jeloForm.controls["dishes"].value;
    novo.cijena = this.jeloForm.controls["price"].value;
    this.Lista.push(novo);
    }
    else{
      alert("Neispravno popunjena forma")
    }
  }
}
