import { Component, OnInit } from '@angular/core';
import { Porudzbina } from 'src/app/models/porudzbina.model';

@Component({
  selector: 'app-prethodne-porudzbine',
  templateUrl: './prethodne-porudzbine.component.html',
  styleUrls: ['./prethodne-porudzbine.component.css']
})
export class PrethodnePorudzbineComponent implements OnInit {
  prikaz : Porudzbina[] = new Array();
  Lista: Porudzbina[] = [
    {vrijeme : new Date,dostavljac:"", narucilac:"dulek99", hrana:"Capricosa", kolicina:2,cijena:500,komentar:"kada dodje kurir da kaze Pomaze Bog",adresa:"Filipa Filipovica",status:"Aktivna"},
    {vrijeme : new Date,dostavljac:"", narucilac:"", hrana:"Capricosa", kolicina:2,cijena:500,komentar:"kada dodje kurir da kaze Pomaze Bog",adresa:"Filipa Filipovica",status:"Izvrseno"},    
    {vrijeme : new Date,dostavljac:"", narucilac:"dulek99", hrana:"Capricosa", kolicina:2,cijena:500,komentar:"kada dodje kurir da kaze Pomaze Bog",adresa:"Filipa Filipovica",status:"Dostavlja se"},    
    {vrijeme : new Date,dostavljac:"", narucilac:"", hrana:"Capricosa", kolicina:2,cijena:500,komentar:"kada dodje kurir da kaze Pomaze Bog",adresa:"Filipa Filipovica",status:"Aktivna"},
    {vrijeme : new Date,dostavljac:"", narucilac:"dulek99", hrana:"Capricosa", kolicina:2,cijena:500,komentar:"kada dodje kurir da kaze Pomaze Bog",adresa:"Filipa Filipovica",status:"Izvrseno"},
    {vrijeme : new Date,dostavljac:"", narucilac:"", hrana:"Capricosa", kolicina:2,cijena:500,komentar:"kada dodje kurir da kaze Pomaze Bog",adresa:"Filipa Filipovica",status:"Dostavlja se"}
    ];
  
  constructor() {
    this.Lista.forEach(element => {
      if(element.narucilac === "dulek99"){
        this.prikaz.push(element);
      }
      
    });
   }

  ngOnInit(): void {
  }

}
