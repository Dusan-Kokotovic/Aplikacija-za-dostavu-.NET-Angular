import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Registration } from '../models/registration.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  ime : string =  "Dusan";
  prezime : string = "Kokotovic";
  user : string = "duledule";
  adresa : string = "Filipa Filipovica 11";
  datum : string = new Date().toISOString().split('T')[0];
  email : string = "kokotovicc@gmail.com"
  role : string = "Dostavljac";

  profileForm = new FormGroup({
    name : new FormControl("", Validators.required),
    lastname : new FormControl("", Validators.required),
    username : new FormControl("", Validators.required),
    date : new FormControl("", Validators.required),
    adress : new FormControl("", Validators.required),
    gmail : new FormControl("",
    [ 
    Validators.required,
    Validators.pattern(new RegExp("^([A-Za-z0-9_\\-\\.])+@gmail.com"))]
    )
  });


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.profileForm.valid){
    let register:Registration = new Registration();
    register.name = this.profileForm.controls["name"].value;
    //register.lastName = this.profileForm.controls["lastname"].value;
    register.username = this.profileForm.controls["username"].value;
    register.email = this.profileForm.controls["email"].value;
    register.adress = this.profileForm.controls["adress"].value;
    register.date = this.profileForm.controls["date"].value;
    register.password = "niksta";
    register.role = this.role;
    console.log(register);
    }
    else{
      alert("Pogresno popunjena polja");
    }
  }

}
