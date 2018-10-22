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
    this.getFoods();
  }

    getFoods() {
        this._restClient.getTopListFor(0).subscribe(
        data => { this.topListUsers = data},
        err => console.error(err),
        () => console.log(this.topListUsers)
      );
    }

  visible_mainScreen=true;
  visible_LoginBox=false;
  visible_About=false;
  visible_Ladeboard=false;

  clickOnPlay(){
    this.visible_LoginBox = true;
    this.visible_About=false;
    this.visible_mainScreen=false;
    this.visible_Ladeboard=false;
  }
  
  clickOnAbout(){
    this.visible_About=true;
    this.visible_LoginBox = false;
    this.visible_mainScreen=false;
    this.visible_Ladeboard=false;
  }

  clickOnLadeboard(){
    this.visible_Ladeboard=true;
    this.visible_LoginBox = false;
    this.visible_About=false;
    this.visible_mainScreen=false;
  }

  clickOnMainScreen(){
    this.visible_mainScreen=true;
    this.visible_Ladeboard=false;
    this.visible_LoginBox = false;
    this.visible_About=false;
  }

}


