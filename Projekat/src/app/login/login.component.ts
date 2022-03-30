import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Login } from '../models/login.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username : new FormControl("", Validators.required),
    password : new FormControl("", Validators.required),
  });


  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  onSubmit() {

    if(this.loginForm.valid)
    {
      let login:Login = new Login();
      login.username = this.loginForm.controls["username"].value;
      login.password = this.loginForm.controls["password"].value;
      console.log(login);
      this.router.navigateByUrl('/home');
    }
    else
    {
    alert("Niste popunili formu")
    }
  }

}
