import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Porudzbina } from 'src/app/models/porudzbina.model';
import { Registration } from 'src/app/models/registration.model';
import { KorisnikService } from 'src/app/Services/korisnik.service';
import { PorudzbinaService } from 'src/app/Services/porudzbina.service';

@Component({
  selector: 'app-dostavljac-home',
  templateUrl: './dostavljac-home.component.html',
  styleUrls: ['./dostavljac-home.component.css']
})
export class DostavljacHomeComponent implements OnInit {
  
  korisnik : Registration = new Registration();
  id : number = Number(localStorage.getItem('id'));


  constructor(private router: Router,private service: KorisnikService) { }

  ngOnInit(): void {
    this.service.getKorisnik(this.id).subscribe(
      (data:Registration) =>{
        this.korisnik = data;
      }
    )
  }

  
  

}
