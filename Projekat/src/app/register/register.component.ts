import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Registration } from '../models/registration.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    name : new FormControl("", Validators.required),
    lastname : new FormControl("", Validators.required),
    username : new FormControl("", Validators.required),
    password : new FormControl("", Validators.required),
    confirmpassword : new FormControl("", Validators.required),
    date : new FormControl("", Validators.required),
    adress : new FormControl("", Validators.required),
    gmail : new FormControl("",
    [ 
    Validators.required,
    Validators.pattern(new RegExp("^([A-Za-z0-9_\\-\\.])+@gmail.com"))]
    )
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.registerForm.valid)
    {
      if(this.registerForm.controls["password"].value!==this.registerForm.controls["confirmpassword"].value)
      {
        alert("Lozinke se ne poklapaju");
        return;
      }
      let register:Registration = new Registration();
      register.name = this.registerForm.controls["name"].value;
      register.lastName = this.registerForm.controls["lastname"].value;
      register.username = this.registerForm.controls["username"].value;
      register.gmail = this.registerForm.controls["gmail"].value;
      register.password = this.registerForm.controls["password"].value;
      register.adress = this.registerForm.controls["adress"].value;
      register.date = this.registerForm.controls["date"].value;
      console.log(register);
      this.router.navigateByUrl('/login');
    }
    else
    {
    alert("Niste popunili formu krsteno")
    }
  }

  }


