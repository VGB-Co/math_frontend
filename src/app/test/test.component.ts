import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
template:`<h2 [ngStyle]="titleStyle"> Welcome {{siteUrl.toUpperCase()}} ! </h2>
  <input [disabled]="isDisabled" [id]="myId" type="text" value="Adam">
  <h2 [class]="specialClass">{{whaDayIsToday()}}</h2>
  <h2 [style.color]="hasError ? 'red' : 'orange'">Name: {{titleInput.value}}</h2>
  <input type="text"  #titleInput>
  <button type="submit" (click) = 'addTodo(titleInput.value)'>Add</button>
  
  <p>
    <button (click)="onClick($event)">Hard</button>
    <button (click)="greeting='lvl easy choosen'">Easy</button>
    {{greeting}}
  </p>`,
  styles: 
  [`.text-success{
      color:green;
    }
    .text-special{
      font-style:italic;
    }
  `]
})
export class TestComponent implements OnInit {

  public name = "Guests";
  public day = "Friday"; 
  public siteUrl = window.location.href;
  public myId = "testId";
  public isDisabled = false;
  public hasError = true;
  public successClass = "text-success";
  public specialClass="text-special";
  public titleStyle = {
    color: "blue",
    fontStyle: "italic"
  }
  public greeting = '';

  constructor() { }

  ngOnInit() {
  }

  whaDayIsToday(){
    return "Today is " + this.day;
  }

  onClick(event){
    console.log(event);
    this.greeting = 'lvl hard choosen!';
  }

  addTodo(title:string) {
    console.log(title);
  }

}
