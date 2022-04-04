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


  u1 : string = "dulek99";
  p1 : string = "123";
  r1 : string = "admin";
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  onSubmit() {

    if(this.loginForm.valid)
    {
      if(this.u1 === this.loginForm.controls["username"].value && this.p1 === this.loginForm.controls["password"].value)
      {
        let login:Login = new Login();
        login.username = this.loginForm.controls["username"].value;
        login.password = this.loginForm.controls["password"].value;
        console.log(login);
        if(this.r1 === "admin"){
          this.router.navigateByUrl('/adminhome');
        }
        else if (this.r1 === "dostavljac"){
          this.router.navigateByUrl('/dostavljachome');
        }
        else if(this.r1 === "potrosac"){
          this.router.navigateByUrl('/potrosachome');
        }
      }
      else
      {
        alert("Pogresan username ili password")

      }
      
    }
    else
    {
    alert("Niste popunili formu")
    }
  }

}
