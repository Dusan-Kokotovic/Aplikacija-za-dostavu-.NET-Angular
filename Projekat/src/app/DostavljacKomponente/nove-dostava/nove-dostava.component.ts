import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Porudzbina } from 'src/app/models/porudzbina.model';
import { Registration } from 'src/app/models/registration.model';
import { KorisnikService } from 'src/app/Services/korisnik.service';
import { PorudzbinaService } from 'src/app/Services/porudzbina.service';

@Component({
  selector: 'app-nove-dostava',
  templateUrl: './nove-dostava.component.html',
  styleUrls: ['./nove-dostava.component.css']
})
export class NoveDostavaComponent implements OnInit {

  prikaz : Porudzbina[] = new Array();
  Lista: Porudzbina[] = [];
  korisnik : Registration = new Registration();
  id : number = 7;
  constructor(private router: Router,private service: PorudzbinaService) {}

  ngOnInit(): void {
    this.service.getPorudzbineZaDostavu().subscribe(
      (data:Porudzbina[]) =>{
        this.Lista = data;
     }
    )
  }


  onSubmit(item:Porudzbina){
    this.service.Prihvati(item,2).subscribe(
      (data:Porudzbina) =>{}
    )
    this.router.navigateByUrl('/trenutna');

  }

}
