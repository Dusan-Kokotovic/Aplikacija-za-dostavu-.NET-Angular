import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Porudzbina } from '../models/porudzbina.model';
import { Registration } from '../models/registration.model';
import { KorisnikService } from '../Services/korisnik.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm = new FormGroup({
    name : new FormControl("", Validators.required),
    username : new FormControl("", Validators.required),
    date : new FormControl("", Validators.required),
    role : new FormControl("",Validators.required),
    adress : new FormControl("", Validators.required),
    email : new FormControl("",
    [ 
    Validators.required,
    Validators.pattern(new RegExp("^([A-Za-z0-9_\\-\\.])+@gmail.com"))]
    )
  });

  datum : string = "";

  korisnik : Registration = new Registration();

  id : number = Number(localStorage.getItem('id'));

  constructor(private router: Router,private service: KorisnikService) { }

  ngOnInit(): void {
    this.service.getKorisnik(this.id).subscribe(
      (data:Registration) =>{
        this.korisnik = data;
        this.datum = data.date.toString().split("T",1)[0];
        console.log(this.korisnik)
      }
    )
    
  }

  onselectFile(e:any){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any) => {
        this.korisnik.image = event.target.result;
      }
    }
  }

  onSubmit(){
    if(this.profileForm.valid){
    this.korisnik.date = new Date(this.datum);
    this.korisnik.porudzbine = [];
    this.service.updateKorisnik(this.korisnik).subscribe(
      )

    }
    else{
     alert("Pogresno popunjena polja");
    }
  }

}
