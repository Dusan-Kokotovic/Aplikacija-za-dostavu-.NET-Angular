import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Porudzbina } from 'src/app/models/porudzbina.model';

@Component({
  selector: 'app-nove-dostava',
  templateUrl: './nove-dostava.component.html',
  styleUrls: ['./nove-dostava.component.css']
})
export class NoveDostavaComponent implements OnInit {

  prikaz : Porudzbina[] = new Array();
  Lista: Porudzbina[] = [
    {vrijeme : new Date,dostavljac:"", narucilac:"dulek99", hrana:"Capricosa", kolicina:2,cijena:500,komentar:"kada dodje kurir da kaze Pomaze Bog",adresa:"Filipa Filipovica",status:"Aktivna"},
    {vrijeme : new Date,dostavljac:"", narucilac:"dulek99", hrana:"Capricosa", kolicina:2,cijena:500,komentar:"kada dodje kurir da kaze Pomaze Bog",adresa:"Filipa Filipovica",status:"Izvrseno"},    
    {vrijeme : new Date,dostavljac:"", narucilac:"dulek99", hrana:"Capricosa", kolicina:2,cijena:500,komentar:"kada dodje kurir da kaze Pomaze Bog",adresa:"Filipa Filipovica",status:"Dostavlja se"},    
    {vrijeme : new Date,dostavljac:"", narucilac:"dulek99", hrana:"Capricosa", kolicina:2,cijena:500,komentar:"kada dodje kurir da kaze Pomaze Bog",adresa:"Filipa Filipovica",status:"Aktivna"},
    {vrijeme : new Date,dostavljac:"", narucilac:"dulek99", hrana:"Capricosa", kolicina:2,cijena:500,komentar:"kada dodje kurir da kaze Pomaze Bog",adresa:"Filipa Filipovica",status:"Izvrseno"},
    {vrijeme : new Date,dostavljac:"", narucilac:"dulek99", hrana:"Capricosa", kolicina:2,cijena:500,komentar:"kada dodje kurir da kaze Pomaze Bog",adresa:"Filipa Filipovica",status:"Dostavlja se"}
    ];

  constructor(private router: Router) {
    this.Lista.forEach(element => {
      if(element.status === "Aktivna"){
        this.prikaz.push(element);
      }
    });
  }

  ngOnInit(): void {
  }


  onSubmit(item:Porudzbina){
    this.prikaz.forEach(element => {
      if(element === item){
        element.status = "Dostavlja se";
      }      
    });
    this.router.navigateByUrl('/dostavljachome');

  }

}
