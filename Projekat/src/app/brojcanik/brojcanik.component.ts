import { Component, OnInit } from '@angular/core';
import { Porudzbina } from '../models/porudzbina.model';
import { PorudzbinaPrikaz } from '../models/porudzbinaprikaz.model';

@Component({
  selector: 'app-brojcanik',
  templateUrl: './brojcanik.component.html',
  styleUrls: ['./brojcanik.component.css']
})
export class BrojcanikComponent implements OnInit {

  role : string = "Dostavljac";

  Lista: Porudzbina[] = [
    {vrijeme : new Date(new Date().getTime() + 1*60000), dostavljac:"", narucilac:"dulek99", hrana:"Aloooo", kolicina:2,cijena:500,komentar:"kada dodje kurir da kaze Pomaze Bog",adresa:"Filipa Filipovica",status:"Dostavlja se"},
    {vrijeme : new Date,dostavljac:"", narucilac:"dulek99", hrana:"Capricosa", kolicina:2,cijena:500,komentar:"kada dodje kurir da kaze Pomaze Bog",adresa:"Filipa Filipovica",status:"Izvrseno"},    
    {vrijeme : new Date,dostavljac:"", narucilac:"dulek99", hrana:"Capricosa", kolicina:2,cijena:500,komentar:"kada dodje kurir da kaze Pomaze Bog",adresa:"Filipa Filipovica",status:"Izvrseno"},    
    {vrijeme : new Date,dostavljac:"", narucilac:"dulek99", hrana:"Capricosa", kolicina:2,cijena:500,komentar:"kada dodje kurir da kaze Pomaze Bog",adresa:"Filipa Filipovica",status:"Aktivna"},
    {vrijeme : new Date,dostavljac:"", narucilac:"dulek99", hrana:"Capricosa", kolicina:2,cijena:500,komentar:"kada dodje kurir da kaze Pomaze Bog",adresa:"Filipa Filipovica",status:"Izvrseno"},
    {vrijeme : new Date,dostavljac:"", narucilac:"dulek99", hrana:"Capricosa", kolicina:2,cijena:500,komentar:"kada dodje kurir da kaze Pomaze Bog",adresa:"Filipa Filipovica",status:"Izvrseno"}
    ];

  item: PorudzbinaPrikaz = new PorudzbinaPrikaz;
  
  constructor() {
    this.Lista.forEach(element => {
      if(element.status == "Dostavlja se"){
        this.item.hrana = element.hrana;
        this.item.kolicina = element.kolicina;
        this.item.adresa = element.adresa;
        this.item.cijena = element.cijena;
        this.item.komentar = element.komentar;
        this.item.status = element.status;
        //this.drugi = element;
      }
    });
  }

  ngOnInit(): void {}
  countDownDate = new Date(new Date().getTime() + 1*60000).getTime();
  demo:any;
  
  x = setInterval(() =>{
    var now = new Date().getTime();
    var distance = this.countDownDate - now;
    var minutes = Math.floor((distance % (1000*60*60))/ (1000*60));
    var seconds = Math.floor((distance % (1000*60)) / 1000);
    this.demo = minutes + " minuta " + seconds + " sekundi";
    if(minutes < 0 || seconds <0){
      minutes = 0;
      seconds = 0;
    }
    if(minutes === 0 && seconds === 0){
      clearInterval(this.x);
      this.item.status = "Izvrseno"
    }
    
  })

  
  DodavanjeTajmera(vrijeme:Date){

  }


          
    
}
