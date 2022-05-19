import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Porudzbina } from '../models/porudzbina.model';
import { PorudzbinaPrikaz } from '../models/porudzbinaprikaz.model';
import { KorisnikService } from '../Services/korisnik.service';

@Component({
  selector: 'app-brojcanik',
  templateUrl: './brojcanik.component.html',
  styleUrls: ['./brojcanik.component.css']
})
export class BrojcanikComponent implements OnInit {

  @Input() childMessage: Date = new Date();
  demo:any;
  countDate : Date = new Date();
  constructor(private router : Router) {}
  ngOnInit(): void {
    this.countDate = this.childMessage;
    var strDate = this.countDate.toString();
    var countDownDate  = new Date(strDate).getTime();
    console.log(countDownDate);
    var x = setInterval(() =>{
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var minutes = Math.floor((distance % (1000*60*60))/ (1000*60));
      var seconds = Math.floor((distance % (1000*60)) / 1000);
      this.demo = minutes + " minuta " + seconds + " sekundi";
      if(minutes < 0 || seconds <0){
        minutes = 0;
        seconds = 0;
        window.location.reload();
      }
      if(minutes === 0 && seconds === 0){
        clearInterval(x);
        if(localStorage.getItem('role') === "Dostavljac"){
          this.router.navigateByUrl('/dostavljachome');
        }
        else{
          this.router.navigateByUrl('/potrosachome');
        }
      }       
      }) 
  }
          
    
}
