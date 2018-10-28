import { Component } from '@angular/core';
import {RestClient} from './Utilities/rest.client';
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
    console.log("Works SA!")
  }

}


