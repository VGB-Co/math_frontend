import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  value='';
  szam1=5;
  szam2=10;
  made_tasks=0;
  correct_answer=0;
  answer_string='';
  value_taskprogressbar=0;

  onEnter(value: string) { 
    this.value = value; 
    this.correct_answer = this.szam1 + this.szam2;
    var widthString = "";
    this.made_tasks += 1;
    this.value_taskprogressbar = 10 * this.made_tasks;
    var pbValueString: string = String(this.value_taskprogressbar);
    widthString="--pb-width: " + pbValueString + "%";
    document.querySelector("body").style.cssText = widthString;

    if(this.correct_answer == Number(this.value)) 
    {
      this.answer_string=" was correct! ";}
    else{
      this.answer_string=" was incorrect! ";}
    }

}
