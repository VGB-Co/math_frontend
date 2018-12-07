import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RestClient} from '../api.service';
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
              this.feladat = this.tasks[0].question;
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

  difficulity='';
  value='';
  feladat = '';
  made_tasks=1;
  correct_answer=0;
  correct_answers=0;
  public answer_correction=true;
  answer_string='';
  value_taskprogressbar=0;

  visible_diffChooser=true;
  visible_game=false;
  visible_gameSummary=false;
  answeredCardNeeded=false;

  selectEasyDiff(){
    this.difficulity = "0";
    console.log('Choosen difficulity: ' + this.difficulity);
    this.getTasksFor(this.difficulity);
    this.visible_diffChooser=false;
    this.visible_game=true;
  }

  selectMediumDiff(){
    this.difficulity = "1";
    console.log('Choosen difficulity: ' + this.difficulity);
    this.getTasksFor(this.difficulity);
    this.visible_diffChooser=false;
    this.visible_game=true;
  }

  selectHardDiff(){
    this.difficulity = "2";
    console.log('Choosen difficulity: ' + this.difficulity);
    this.getTasksFor(this.difficulity);
    this.visible_diffChooser=false;
    this.visible_game=true;
  }

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

    console.log('Answer checked');

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
      this.restClient.postResult(this.difficulity, this.correct_answers, this.timeLeft/100).subscribe(
        data => console.log(data),
        err => console.log(err)
      );
    }

    this.feladat = this.tasks[this.made_tasks-1].question;
    this.correct_answer = this.tasks[this.made_tasks-1].correct_answer;
  }

  clickOnInputField(){
    this.startTimer();
  }

  startNewGame(){
    console.log('New game started')
    this.resetTimer();
    var widthString = "";
    this.value='';
    this.made_tasks=1;
    this.correct_answers=0;
    this.answer_string='';
    this.value_taskprogressbar=0;
    var pbValueString: string = String(this.value_taskprogressbar);
    widthString="--pb-width: " + pbValueString + "%";
    document.querySelector("body").style.cssText = widthString;
    this.visible_diffChooser=true;
    this.visible_game=false;
    this.visible_gameSummary=false;
    this.answeredCardNeeded=false;
  }

  backToHome(){
    this.router.navigate(['test']);
  }

}
