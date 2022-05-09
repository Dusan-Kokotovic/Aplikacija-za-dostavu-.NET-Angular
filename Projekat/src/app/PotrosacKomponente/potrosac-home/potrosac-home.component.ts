import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Porudzbina } from 'src/app/models/porudzbina.model';
import { PorudzbinaService } from 'src/app/Services/porudzbina.service';

@Component({
  selector: 'app-potrosac-home',
  templateUrl: './potrosac-home.component.html',
  styleUrls: ['./potrosac-home.component.css']
})
export class PotrosacHomeComponent implements OnInit {
  
  Lista: Porudzbina[] = [];
  prikaz : Porudzbina[] = [];
  constructor(private router: Router,private service: PorudzbinaService) { }

  ngOnInit(): void {
    this.service.getTekucePorudzbine(6).subscribe(
      (data:Porudzbina[]) =>{
        this.Lista = data;
     }
    )

  }


  onSubmit(){
    console.log(this.Lista);
  }
}
