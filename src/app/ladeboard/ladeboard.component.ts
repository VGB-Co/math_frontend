import { Component, OnInit } from '@angular/core';
import {RestClient} from '../Mocky/rest.client';
import {User} from '../user';

@Component({
  selector: 'app-ladeboard',
  templateUrl: './ladeboard.component.html',
  styleUrls: ['./ladeboard.component.css']
})
export class LadeboardComponent implements OnInit {

  listedLadeboard='';
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
