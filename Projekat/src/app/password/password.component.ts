import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Registration } from '../models/registration.model';
import { KorisnikService } from '../Services/korisnik.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  passwordForm = new FormGroup({
    password : new FormControl("", Validators.required),
    confirmpassword : new FormControl("", Validators.required)
  });

  korisnik : Registration = new Registration();
  constructor(private router: Router,private service: KorisnikService) { }

  ngOnInit(): void {
    this.service.getKorisnik(Number(localStorage.getItem('id'))).subscribe(
      (data:Registration) =>{
        this.korisnik = data;
      }
    )
  }

  onSubmit(){
    if(this.passwordForm.valid){
      if(this.passwordForm.controls["password"].value!==this.passwordForm.controls["confirmpassword"].value){
        alert("lozinke se ne poklapaju");
        return;
      }
      this.korisnik.password = this.passwordForm.controls["password"].value;
      this.korisnik.porudzbine = [];
      console.log(this.korisnik);
      this.service.updateKorisnik(this.korisnik).subscribe()
    }
    else{
      alert("Neispravno popunjene lozinke")
    }

  }

}
