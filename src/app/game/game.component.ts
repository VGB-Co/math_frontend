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

  made_tasks=0;
  correct_answer=9;
  answer_string='';
  value_taskprogressbar=0;

  clickOnSubmitAnswer(){
    var widthString = "";
    this.made_tasks += 1;
    this.value_taskprogressbar = 10 * this.made_tasks;
    var pbValueString: string = String(this.value_taskprogressbar);
    widthString="--pb-width: " + pbValueString + "%";
    document.querySelector("body").style.cssText = widthString;

    //todo - add typed value to ts for check
    if(this.correct_answer == 9) 
    {
      this.answer_string=" was correct! ";}
    else{
      this.answer_string=" was incorrect! ";}

    console.log(this.answer_string);
  }

}
