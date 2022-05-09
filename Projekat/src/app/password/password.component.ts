import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  passwordForm = new FormGroup({
    oldpassword : new FormControl("", Validators.required),
    password : new FormControl("", Validators.required),
    confirmpassword : new FormControl("", Validators.required)
  });

  role = "Potrosac"
  oldPassword:string = "1234";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.passwordForm.valid){
      if(this.passwordForm.controls["password"].value!==this.passwordForm.controls["confirmpassword"].value){
        alert("lozinke se ne poklapaju");
        return;
      }
      if(this.passwordForm.controls["oldpassword"].value!==this.oldPassword){
        alert("Pogresna stara lozinka");
        return;
      }
      console.log(this.passwordForm.controls["password"].value);
    }
    else{
      alert("Neispravno popunjene lozinke")
    }

  }

}
