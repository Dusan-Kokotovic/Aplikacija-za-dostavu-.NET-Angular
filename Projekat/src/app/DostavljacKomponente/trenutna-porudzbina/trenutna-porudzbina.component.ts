import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Porudzbina } from 'src/app/models/porudzbina.model';
import { PorudzbinaService } from 'src/app/Services/porudzbina.service';

@Component({
  selector: 'app-trenutna-porudzbina',
  templateUrl: './trenutna-porudzbina.component.html',
  styleUrls: ['./trenutna-porudzbina.component.css']
})
export class TrenutnaPorudzbinaComponent implements OnInit {

  Lista: Porudzbina[] = [];
  prikaz: Porudzbina[]= new Array()


  constructor(private router: Router,private service: PorudzbinaService) { }

  ngOnInit(): void {
    this.service.getTekucePorudzbine(Number(localStorage.getItem('id'))).subscribe(
      (data:Porudzbina[]) =>{
        this.Lista = data;
     }
    )
  }

  Logout(){
    localStorage.setItem('id',"");
    localStorage.setItem('token',"");
    localStorage.setItem('role',"");
    this.router.navigateByUrl('/login');
  }


}
