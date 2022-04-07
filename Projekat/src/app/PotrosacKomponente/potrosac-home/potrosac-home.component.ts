import { Component, OnInit } from '@angular/core';
import { Porudzbina } from 'src/app/models/porudzbina.model';

@Component({
  selector: 'app-potrosac-home',
  templateUrl: './potrosac-home.component.html',
  styleUrls: ['./potrosac-home.component.css']
})
export class PotrosacHomeComponent implements OnInit {
  
  Lista: Porudzbina[] = [
    {vrijeme : new Date(new Date().getTime() + 1*60000), dostavljac:"", narucilac:"dulek99", hrana:"Aloooo", kolicina:2,cijena:500,komentar:"kada dodje kurir da kaze Pomaze Bog",adresa:"Filipa Filipovica",status:"Dostavlja se"},
    {vrijeme : new Date(new Date().getTime() + 2*60000),dostavljac:"", narucilac:"dulek99", hrana:"Capricosa", kolicina:2,cijena:500,komentar:"kada dodje kurir da kaze Pomaze Bog",adresa:"Filipa Filipovica",status:"Dostavlja se"},    
    {vrijeme : new Date(new Date().getTime() - 5*60000),dostavljac:"", narucilac:"dulek99", hrana:"Capricosa", kolicina:2,cijena:500,komentar:"kada dodje kurir da kaze Pomaze Bog",adresa:"Filipa Filipovica",status:"Dostavlja se"},    
    {vrijeme : new Date(new Date().getTime() - 5*60000),dostavljac:"", narucilac:"dulek99", hrana:"Capricosa", kolicina:2,cijena:500,komentar:"kada dodje kurir da kaze Pomaze Bog",adresa:"Filipa Filipovica",status:"Dostavlja se"},
    {vrijeme : new Date,dostavljac:"", narucilac:"dulek99", hrana:"Capricosa", kolicina:2,cijena:500,komentar:"kada dodje kurir da kaze Pomaze Bog",adresa:"Filipa Filipovica",status:"Izvrseno"},
    {vrijeme : new Date,dostavljac:"", narucilac:"dulek99", hrana:"Capricosa", kolicina:2,cijena:500,komentar:"kada dodje kurir da kaze Pomaze Bog",adresa:"Filipa Filipovica",status:"Izvrseno"}   
   ];
   prikaz: Porudzbina[]= new Array()

  constructor() { }

  ngOnInit(): void {

    this.Lista.forEach(element => {
      if(element.vrijeme < new Date()){
        element.status = "Izvrseno";
      }
      if(element.status === "Dostavlja se"){
        this.prikaz.push(element);
      }
      
    });
    console.log(this.Lista);
    }
  

}
