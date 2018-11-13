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
  correct_answers=0;
  answer_string='';
  value_taskprogressbar=0;
  visible_game=true;
  visible_gameSummary=false;

  onEnter(value: string) { 
    this.value = value; 
    this.correct_answer = this.szam1 + this.szam2;
    var widthString = "";
    if (this.made_tasks<10)
    {
      this.made_tasks += 1;
      this.value_taskprogressbar = 10 * this.made_tasks;
      var pbValueString: string = String(this.value_taskprogressbar);
      widthString="--pb-width: " + pbValueString + "%";
      document.querySelector("body").style.cssText = widthString;
  
      if(this.correct_answer == Number(this.value)) 
      {
        this.correct_answers+=1;
        this.answer_string=", was correct! ";}
      else
      {
        this.answer_string=", was incorrect! ";
      }
    }
    else{
      this.visible_game=false;
      this.visible_gameSummary=true;
    } 
  }

  startNewGame(){
    var widthString = "";
    this.value='';
    this.made_tasks=0;
    this.correct_answer=0;
    this.answer_string='';
    this.value_taskprogressbar=0;
    var pbValueString: string = String(this.value_taskprogressbar);
    widthString="--pb-width: " + pbValueString + "%";
    document.querySelector("body").style.cssText = widthString;
    this.visible_game=true;
    this.visible_gameSummary=false;
  }
}
