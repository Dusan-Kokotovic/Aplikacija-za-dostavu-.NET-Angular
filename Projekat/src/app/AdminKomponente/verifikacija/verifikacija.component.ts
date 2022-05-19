import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Registration } from 'src/app/models/registration.model';
import { KorisnikService } from 'src/app/Services/korisnik.service';

@Component({
  selector: 'app-verifikacija',
  templateUrl: './verifikacija.component.html',
  styleUrls: ['./verifikacija.component.css']
})


export class VerifikacijaComponent implements OnInit {

  Lista: Registration[] = [];
  korisnik : Registration = new Registration();

  verifyForm = new FormGroup({
    username : new FormControl("", Validators.required),
  });


  constructor(private router: Router,private service: KorisnikService) { }

  ngOnInit(): void {
    this.service.getKorisnici().subscribe(
      (data:Registration[]) =>{
        this.Lista = data;
     }
    )
    console.log(this.Lista);
  }
  token : string = '';
  onSubmit(un:Registration){
    this.service.getKorisnik(un.id).subscribe(
      (data:Registration) =>{
        if(data.status === "Aktivan"){
          alert("Korisnika je vec neko verifikovao")
        }
        else{
          un.status = "Aktivan";
          //this.token = JSON.parse(localStorage.getItem('token')!);
          this.service.updateKorisnik(un).subscribe()
          this.service.sendMail(un.email).subscribe()
        }
     }
    )    
  }

  decline(un:Registration){
    this.service.getKorisnik(un.id).subscribe(
      (data:Registration) =>{
        if(data.status === "Aktivan" || data.status ==="Odbijen"){
          alert("Korisnika je vec neko verifikovao")
        }
        else{
          un.status = "Odbijen";
          this.service.updateKorisnik(un).subscribe()
        }
     }
    )    
  }

}
