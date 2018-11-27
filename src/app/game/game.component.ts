import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RestClient} from '../Mocky/rest.client';
import { Task } from '../Models/task';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {

  constructor(private router: Router, private restClient: RestClient) { }

  ngOnInit() {
    this.startNewGame();
    this.getTasksFor(0);
  }

  private tasks = Array<Task>();

  getTasksFor(difficulty) {
    this.restClient.getTasksFor(difficulty).subscribe(
    data => {
              var tasks = new Array<Task>();
              var response = data as Array<any>;
              response.forEach(task => {
                let curr_task = new Task(task);
                tasks.push(curr_task);
              });
              console.log(tasks);
              this.tasks = tasks;
              this.feladat = this.tasks[0].question + ' = ';
              this.correct_answer = this.tasks[0].correct_answer;
            },
    err => console.error(err),
    () => console.log('getTasksFor completed')
  );
  }

  timeLeft: number = 60;
  interval;

  startTimer() {
    this.interval = setInterval(() => {
      this.timeLeft++;
    },10)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  resetTimer() {
    clearInterval(this.interval);
    this.timeLeft = 0;
  }

  value='';
  szam1=5;
  szam2=10;
  feladat = '';
  made_tasks=1;
  correct_answer=0;
  correct_answers=0;
  public answer_correction=true;
  answer_string='';
  value_taskprogressbar=0;
  visible_game=true;
  visible_gameSummary=false;
  answeredCardNeeded=false;

  onEnter(value: string) {
    this.answeredCardNeeded=true; 
    this.value = value; 
    var widthString = "";
    if(this.correct_answer == Number(this.value)) 
    {
      this.correct_answers+=1;
      this.answer_string = this.feladat + this.value + ' | correct answer: ' + this.correct_answer + ' -> your answer was TRUE!';
      this.answer_correction=true;}
    else
    {
      this.answer_string = this.feladat + this.value + ' | correct answer: ' + this.correct_answer + ' -> your answer was FALSE! :)';
      this.answer_correction=false;
    }

    if (this.made_tasks<this.tasks.length)
    {
      this.made_tasks += 1;
      this.value_taskprogressbar = Number(((100/this.tasks.length) * (this.made_tasks-1)).toFixed(0));
      var pbValueString: string = String(this.value_taskprogressbar);
      widthString="--pb-width: " + pbValueString + "%";
      document.querySelector("body").style.cssText = widthString;
    }
    else{
      this.visible_game=false;
      this.visible_gameSummary=true;
      this.pauseTimer();
    }

    this.feladat = this.tasks[this.made_tasks-1].question + ' = ';
    this.correct_answer = this.tasks[this.made_tasks-1].correct_answer;
  }

  clickOnInputField(){
    this.startTimer();
  }

  startNewGame(){
    this.resetTimer();
    var widthString = "";
    this.value='';
    this.made_tasks=1;
    this.correct_answers=0;
    this.answer_string='';
    this.answer_correction=true;
    this.value_taskprogressbar=0;
    var pbValueString: string = String(this.value_taskprogressbar);
    widthString="--pb-width: " + pbValueString + "%";
    document.querySelector("body").style.cssText = widthString;
    this.visible_game=true;
    this.visible_gameSummary=false;
    this.answeredCardNeeded=false;
  }

  backToHome(){
    this.router.navigate(['test']);
  }

}
