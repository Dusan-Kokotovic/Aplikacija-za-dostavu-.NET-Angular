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

  onSubmit(un:Registration){
    un.status = "Aktivan";
    console.log(un);
    this.service.updateKorisnik(un).subscribe(
    )
  }

}
