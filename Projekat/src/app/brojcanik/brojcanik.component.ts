import { Component, Input, OnInit } from '@angular/core';
import { Porudzbina } from '../models/porudzbina.model';
import { PorudzbinaPrikaz } from '../models/porudzbinaprikaz.model';

@Component({
  selector: 'app-brojcanik',
  templateUrl: './brojcanik.component.html',
  styleUrls: ['./brojcanik.component.css']
})
export class BrojcanikComponent implements OnInit {

  @Input() childMessage: Date = new Date();
  demo:any;
  constructor() {}
  ngOnInit(): void {
    var countDownDate  = this.childMessage.getTime();
    var x = setInterval(() =>{
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var minutes = Math.floor((distance % (1000*60*60))/ (1000*60));
      var seconds = Math.floor((distance % (1000*60)) / 1000);
      this.demo = minutes + " minuta " + seconds + " sekundi";
      if(minutes < 0 || seconds <0){
        minutes = 0;
        seconds = 0;
      }
      if(minutes === 0 && seconds === 0){
        clearInterval(x);
      }       
      }) 
  }
          
    
}
