import { Component, OnInit } from '@angular/core';

//ng generate module [name] -> create modules

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
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
