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
  gmail : string = "kokotovicc@gmail.com"

  profileForm = new FormGroup({
    name : new FormControl("", Validators.required),
    lastname : new FormControl("", Validators.required),
    username : new FormControl("", Validators.required),
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
    register.lastName = this.profileForm.controls["lastname"].value;
    register.username = this.profileForm.controls["username"].value;
    register.gmail = this.profileForm.controls["gmail"].value;
    register.password = "niksta";
    console.log(register);
    }
    else{
      alert("Pogresno popunjena polja");
    }
  }

}
