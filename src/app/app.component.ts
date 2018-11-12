import { Component } from '@angular/core';
import {RestClient} from './Mocky/rest.client';
import {Observable} from 'rxjs';
import {User} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public topListUsers;
 
  constructor(private _restClient: RestClient) { }

  ngOnInit() {
    this.getTopListFor(0);
  }

  getTopListFor(level) {
      this._restClient.getTopListFor(level).subscribe(
      data => {
                var users = new Array<User>();
                data["users"].forEach(user => {
                  let curr_user = new User(user);
                  users.push(curr_user);
                });
                this.topListUsers=users;
              },
      err => console.error(err),
      () => console.log(this.topListUsers)
    );
  }

  visible_About=false;
  visible_Ladeboard=false;
  value_userInput="";
  value_passwordInput="";
  listedLadeboard="";

  clickOnPlay(){
    this.visible_About=false;
    this.visible_Ladeboard=false;
  }
  
  clickOnAbout(){
    this.visible_About=true;
    this.visible_Ladeboard=false;
  }

  clickOnLadeboard(){
    this.visible_Ladeboard=true;
    this.visible_About=false;
  }


  showEasyLadeboard(){
    this.listedLadeboard="easy";
    console.log(this.listedLadeboard + " ladeboard chosen");
    console.log(this.topListUsers[0].position + " : " + this.topListUsers[0].name + " - " + this.topListUsers[0].topScore);
  }

  showMediumLadeboard(){
    this.listedLadeboard="medium";
    console.log(this.listedLadeboard + " ladeboard chosen");
  }

  showHardLadeboard(){
    this.listedLadeboard="hard";
    console.log(this.listedLadeboard + " ladeboard chosen");
  }

}


