import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Porudzbina } from 'src/app/models/porudzbina.model';
import { PorudzbinaService } from 'src/app/Services/porudzbina.service';

@Component({
  selector: 'app-prethodne-porudzbine',
  templateUrl: './prethodne-porudzbine.component.html',
  styleUrls: ['./prethodne-porudzbine.component.css']
})
export class PrethodnePorudzbineComponent implements OnInit {
  prikaz : Porudzbina[] = new Array();
  Lista: Porudzbina[] = [];
  
  constructor(private router: Router,private service: PorudzbinaService) {}

  ngOnInit(): void {
    this.service.getPorudzbineKorisnika(2).subscribe(
      (data:Porudzbina[]) =>{
        this.Lista = data;
     }
    )
  }

  onSubmit(){
    console.log(this.Lista);
    
  }

}
