import { Component, OnInit } from '@angular/core';


//ng generate module [name] -> create modules

@Component({
selector: 'app-test',
template:`<i> Welcome {{siteUrl.toUpperCase()}} ! </i>
  <h3><span [style.color]="hasError ? 'green' : 'red'">Name: </span> <i> {{titleInput.value}}</i></h3>
  <input type="text"  #titleInput>
  <button type="submit" (click)="addTodo(titleInput.value)">Add</button>
  
  <p>
    Please choose difficulity lvl: 
    <button (click)="onClick($event)">Hard</button>
    or
    <button (click)="greeting='lvl easy choosen'">Easy</button>
    {{greeting}}
  </p>`,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Guests";
  public siteUrl = window.location.href;
  public myId = "testId";
  public hasError = true;
  public greeting = '';

  constructor() { }

  ngOnInit() {
  }

  onClick(event){
    console.log(event);
    this.greeting = 'lvl hard choosen!';
  }

  addTodo(title:string) {
    console.log(title);
  }

}
