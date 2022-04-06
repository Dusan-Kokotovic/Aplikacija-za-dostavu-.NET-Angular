import { Component, OnInit } from '@angular/core';
import { Porudzbina } from 'src/app/models/porudzbina.model';

@Component({
  selector: 'app-sve-porudzbine',
  templateUrl: './sve-porudzbine.component.html',
  styleUrls: ['./sve-porudzbine.component.css']
})
export class SvePorudzbineComponent implements OnInit {

  Lista: Porudzbina[] = [
    {vrijeme : new Date, dostavljac:"", narucilac:"dulek99", hrana:"Capricosa", kolicina:2,cijena:500,komentar:"kada dodje kurir da kaze Pomaze Bog",adresa:"Filipa Filipovica",status:"Aktivna"},
    {vrijeme : new Date,dostavljac:"", narucilac:"dulek99", hrana:"Capricosa", kolicina:2,cijena:500,komentar:"kada dodje kurir da kaze Pomaze Bog",adresa:"Filipa Filipovica",status:"Izvrseno"},    
    {vrijeme : new Date,dostavljac:"", narucilac:"dulek99", hrana:"Capricosa", kolicina:2,cijena:500,komentar:"kada dodje kurir da kaze Pomaze Bog",adresa:"Filipa Filipovica",status:"Dostavlja se"},    
    {vrijeme : new Date,dostavljac:"", narucilac:"dulek99", hrana:"Capricosa", kolicina:2,cijena:500,komentar:"kada dodje kurir da kaze Pomaze Bog",adresa:"Filipa Filipovica",status:"Aktivna"},
    {vrijeme : new Date,dostavljac:"", narucilac:"dulek99", hrana:"Capricosa", kolicina:2,cijena:500,komentar:"kada dodje kurir da kaze Pomaze Bog",adresa:"Filipa Filipovica",status:"Izvrseno"},
    {vrijeme : new Date,dostavljac:"", narucilac:"dulek99", hrana:"Capricosa", kolicina:2,cijena:500,komentar:"kada dodje kurir da kaze Pomaze Bog",adresa:"Filipa Filipovica",status:"Dostavlja se"}
    ];


  constructor() { }

  ngOnInit(): void {
  }

}
