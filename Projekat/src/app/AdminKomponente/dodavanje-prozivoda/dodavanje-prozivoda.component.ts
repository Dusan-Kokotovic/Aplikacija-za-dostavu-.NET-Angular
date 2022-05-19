import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Jelo } from 'src/app/models/jelo.model';
import { JeloService } from 'src/app/Services/jelo.service';


@Component({
  selector: 'app-dodavanje-prozivoda',
  templateUrl: './dodavanje-prozivoda.component.html',
  styleUrls: ['./dodavanje-prozivoda.component.css'],
  providers:[JeloService]
})
export class DodavanjeProzivodaComponent implements OnInit {

  jeloForm = new FormGroup({
    name : new FormControl("", Validators.required),
    dishes : new FormControl("", Validators.required),
    price : new FormControl("", [ 
      Validators.required
    /*Validators.pattern(new RegExp("[a-zA-Z ]*"))*/]),
  });

  Lista : Jelo[] = []
  token : string = String(localStorage.getItem('token'));

  constructor(private router: Router,private service: JeloService) { }

  ngOnInit(): void {
    this.service.getJela(this.token).subscribe(
      (data:Jelo[]) =>{
         this.Lista = data;
      }
    )
  }

  
  onSubmit(){
    console.log(this.Lista);
    if(this.jeloForm.valid){
    let novo = new Jelo()
    novo.naziv = this.jeloForm.controls["name"].value;
    novo.sastojci = this.jeloForm.controls["dishes"].value;
    novo.cijena = this.jeloForm.controls["price"].value;
    this.Lista.push(novo);
    this.service.dodajJelo(novo,this.token).subscribe(
      (data:Jelo) =>{
        // this.Lista = data;
      }
    )
    }
    else{
      alert("Neispravno popunjena forma")
    }
  }
}
