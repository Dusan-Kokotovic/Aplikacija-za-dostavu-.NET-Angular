import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Porudzbina } from 'src/app/models/porudzbina.model';
import { Registration } from 'src/app/models/registration.model';
import { KorisnikService } from 'src/app/Services/korisnik.service';
import { PorudzbinaService } from 'src/app/Services/porudzbina.service';

@Component({
  selector: 'app-dostavljac-navbar',
  templateUrl: './dostavljac-navbar.component.html',
  styleUrls: ['./dostavljac-navbar.component.css']
})
export class DostavljacNavbarComponent implements OnInit {

  constructor(private router: Router,private service: KorisnikService, private service2 : PorudzbinaService) { }

  Lista: Porudzbina[] = [];
  korisnik : Registration = new Registration();
  id : number = Number(localStorage.getItem('id'));
  role :string = "";
  ngOnInit(): void {
    this.service.getKorisnik(this.id).subscribe(
      (data:Registration) =>{
        this.korisnik = data;
      }
    )
    this.service2.getTekucePorudzbine(this.id).subscribe(
    (data:Porudzbina[]) =>{
      this.Lista = data;
      console.log(this.Lista.length);
    }  
    )
  }

  Logout(){
    console.log("URAAAAAAAAAAA");
    localStorage.setItem('id',"");
    localStorage.setItem('token',"");
    localStorage.setItem('role',"");
    this.router.navigateByUrl('/login');
  }
}
