import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import {RestClient} from '../api.service';
import {User} from '../Models/user';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  constructor(private _restClient: RestClient) {}

  ngOnInit() {this.getTopListFor(0)}

  public topListUsers = Array<User>();

  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
      console.log(tabChangeEvent);
      if(tabChangeEvent.index==0){
        console.log('Easy leaderboard listed');
        this.getTopListFor(0);
      }
      else{
        if(tabChangeEvent.index==1){
          console.log('Medium leaderboard listed');
          this.getTopListFor(1);
        }
        else{
          console.log('Hard leaderboard listed');
          this.getTopListFor(2);
        }
      }
  }

  public getTopListFor(level) {
    this._restClient.getTopListFor(level).subscribe(
    data => {
              var users = new Array<User>();
              data["users"].forEach(user => {
                let curr_user = new User();
                curr_user.name=user['name'];
                curr_user.score=user['score'];
                curr_user.time=user['time'];
                users.push(curr_user);
              });
              this.topListUsers=users;
            },
    err => {console.error(err)},
    () => console.log(this.topListUsers),
  );
  }

}