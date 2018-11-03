import { Component } from '@angular/core';
import {RestClient} from './Mocky/rest.client';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'VGB Co.';

  public topListUsers;
 
  constructor(private _restClient: RestClient) { }

  ngOnInit() {
    this.getTopListFor(0);
  }

  getTopListFor(level) {
      this._restClient.getTopListFor(level).subscribe(
      data => { this.topListUsers = data},
      err => console.error(err),
      () => console.log(this.topListUsers)
    );
  }

  visible_mainScreen=true;
  visible_LoginBox=false;
  visible_About=false;
  visible_Ladeboard=false;
  visible_Questions=false;
  value_userInput="";
  value_passwordInput="";
  value_taskprogressbar=0;
  made_tasks=0;
  answer_string="";
  correct_answer=9;

  clickOnPlay(){
    this.visible_LoginBox = true;
    this.visible_About=false;
    this.visible_mainScreen=false;
    this.visible_Ladeboard=false;
    this.visible_Questions=false;
  }
  
  clickOnAbout(){
    this.visible_About=true;
    this.visible_LoginBox = false;
    this.visible_mainScreen=false;
    this.visible_Ladeboard=false;
    this.visible_Questions=false;
  }

  clickOnLadeboard(){
    this.visible_Ladeboard=true;
    this.visible_LoginBox = false;
    this.visible_About=false;
    this.visible_mainScreen=false;
    this.visible_Questions=false;
  }

  clickOnMainScreen(){
    this.visible_mainScreen=true;
    this.visible_Ladeboard=false;
    this.visible_LoginBox = false;
    this.visible_About=false;
    this.visible_Questions=false;
  }

  clickOnSignIn(){
    console.log("Works SI!");
    this.value_userInput="WorksUser";
    this.value_passwordInput="WorksPassword";
    console.log(this.value_userInput);
    console.log(this.value_passwordInput);
    this.visible_LoginBox = false;
    this.visible_Questions=true;
  }

  clickOnSubmitAnswer(){
    var widthString = "";
    this.made_tasks += 1;
    this.value_taskprogressbar = 10 * this.made_tasks;
    var pbValueString: string = String(this.value_taskprogressbar);
    widthString="--pb-width: " + pbValueString + "%";
    //console.log(widthString);
    document.querySelector("body").style.cssText = widthString;
    if(this.correct_answer == 9) //todo addtyped value
    {
      this.answer_string=" was correct! ";
    }
    else{
      this.answer_string=" was incorrect! ";
    }

    console.log(this.answer_string);
  }

}


