import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Porudzbina } from 'src/app/models/porudzbina.model';
import { PorudzbinaService } from 'src/app/Services/porudzbina.service';

@Component({
  selector: 'app-sve-porudzbine',
  templateUrl: './sve-porudzbine.component.html',
  styleUrls: ['./sve-porudzbine.component.css'],
  providers:[PorudzbinaService]
})
export class SvePorudzbineComponent implements OnInit {

  Lista: Porudzbina[] = [];


  constructor(private router: Router,private service: PorudzbinaService) { }

  ngOnInit(): void {
    this.service.getPorudzbine().subscribe(
      (data:Porudzbina[]) =>{
        this.Lista = data;
     }
    )
  }



}
