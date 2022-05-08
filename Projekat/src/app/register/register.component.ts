import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Registration } from '../models/registration.model';
import { KorisnikService } from '../Services/korisnik.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    name : new FormControl("", Validators.required),
    //photo : new FormControl("", Validators.required),
    username : new FormControl("", Validators.required),
    password : new FormControl("", Validators.required),
    confirmpassword : new FormControl("", Validators.required),
    date : new FormControl("", Validators.required),
    adress : new FormControl("", Validators.required),
    role : new FormControl("", Validators.required),
    email : new FormControl("",
    [ 
    Validators.required,
    Validators.pattern(new RegExp("^([A-Za-z0-9_\\-\\.])+@gmail.com"))]
    )
  });

  constructor(private router: Router,private service: KorisnikService) { }

  ngOnInit(): void {
  }

  url = "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg";

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
      register.username = this.registerForm.controls["username"].value;
      register.email = this.registerForm.controls["email"].value;
      register.password = this.registerForm.controls["password"].value;
      register.adress = this.registerForm.controls["adress"].value;
      register.date = this.registerForm.controls["date"].value;
      register.role = this.registerForm.controls["role"].value;
      register.image = this.url;
      if(register.role === "Dostavljac"){
        register.status = "Na cekanju"
      }
      else{
        register.status = "Aktivan"
      }
      console.log(register);
      this.service.addKorisnik(register).subscribe(
        (data:Registration) =>{}
      )
      this.router.navigateByUrl('/login');
    }
    else
    {
    alert("Niste popunili formu krsteno")
    }
  }

  onselectFile(e:any){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any) => {
        this.url = event.target.result;
        console.log(this.url);        
      }
    }
  }

  }


