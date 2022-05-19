import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Login } from '../models/login.model';
import { Router } from '@angular/router';
import { KorisnikService } from '../Services/korisnik.service';
import { Registration } from '../models/registration.model';


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

  userdata:any;
  
  constructor(private router: Router,private service: KorisnikService) { }

  ngOnInit(): void {}

  onSubmit() {

    if(this.loginForm.valid)
    {
        let registration:Registration = new Registration();
        registration.username = this.loginForm.controls["username"].value;
        registration.password = this.loginForm.controls["password"].value;
        this.service.Login(registration).subscribe(
          (data:Registration) =>{
            localStorage.setItem('token', data.token);
            localStorage.setItem('id', data.id.toString());
            localStorage.setItem('role',data.role);
            if(localStorage.getItem('token') == null){
              alert("Pogresan username ili password");
              localStorage.setItem('id',"");
              localStorage.setItem('role',"");
            }
            else{
              if(data.role == "Admin"){
                this.router.navigateByUrl('/adminhome');
              }
              else if (data.role == "Dostavljac"){
                this.router.navigateByUrl('/dostavljachome');
              }
              else if(data.role == "Potrosac"){
                this.router.navigateByUrl('/potrosachome');
              }     
            }

          }
        )
    }
    else
    {
    alert("Niste popunili formu")
    }
  }

}
