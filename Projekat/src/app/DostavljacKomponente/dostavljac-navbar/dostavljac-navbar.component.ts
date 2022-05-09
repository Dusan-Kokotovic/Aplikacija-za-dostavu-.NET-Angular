import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registration } from 'src/app/models/registration.model';
import { KorisnikService } from 'src/app/Services/korisnik.service';

@Component({
  selector: 'app-dostavljac-navbar',
  templateUrl: './dostavljac-navbar.component.html',
  styleUrls: ['./dostavljac-navbar.component.css']
})
export class DostavljacNavbarComponent implements OnInit {

  constructor(private router: Router,private service: KorisnikService) { }

  korisnik : Registration = new Registration();
  id : number = 7;
  ngOnInit(): void {
    this.service.getKorisnik(this.id).subscribe(
      (data:Registration) =>{
        this.korisnik = data;
      }
    )
  }

}
