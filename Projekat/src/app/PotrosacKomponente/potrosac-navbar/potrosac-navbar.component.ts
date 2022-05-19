import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-potrosac-navbar',
  templateUrl: './potrosac-navbar.component.html',
  styleUrls: ['./potrosac-navbar.component.css']
})
export class PotrosacNavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  Logout(){
    console.log("URAAAAAAAAAAA");
    localStorage.setItem('id',"");
    localStorage.setItem('token',"");
    localStorage.setItem('role',"");
    this.router.navigateByUrl('/login');
  }

}
