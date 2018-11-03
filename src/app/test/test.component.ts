import { Component, OnInit } from '@angular/core';

//ng generate module [name] -> create modules

@Component({
selector: 'app-test',
template:`<i> Welcome {{siteUrl.toUpperCase()}} ! </i>
  <h3><span [style.color]="hasError ? 'green' : 'red'">Name: </span> <i> {{titleInput.value}}</i></h3>
  <input type="text"  #titleInput>
  <button type="submit" (click)="addTodo(titleInput.value)">Add</button>
  
  <p style="padding-top: 20px"> Please choose difficulity (easy | medium | hard) : {{greeting}} <p>
  <p>
    <button class="diffchoser" (click)="selectEasyDiff()">Easy</button>
    or
    <button class="diffchoser" (click)="selectMediumDiff()">Medium</button>
    or
    <button class="diffchoser" (click)="selectHardDiff()">Hard</button>
  </p>`,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Guests";
  public siteUrl = window.location.href;
  public myId = "testId";
  public hasError = true;
  public greeting = '';
  public choosenLvl = '';

  constructor() { }

  ngOnInit() {
  }

  addTodo(title:string) {
    console.log(title);
  }

  selectEasyDiff(){
    console.log(event);
    this.greeting = ' lvl easy choosen!';
    this.choosenLvl = "easy";
    console.log(this.choosenLvl);
  }

  selectMediumDiff(){
    console.log(event);
    this.greeting = ' lvl medium choosen!';
    this.choosenLvl = "medium";
    console.log(this.choosenLvl);
  }

  selectHardDiff(){
    console.log(event);
    this.greeting = ' lvl hard choosen!';
    this.choosenLvl = "hard";
    console.log(this.choosenLvl);
  }

}
