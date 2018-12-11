import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
      console.log(tabChangeEvent);
      if(tabChangeEvent.index==0){
        console.log('Easy leaderboard listed');
        localStorage.setItem('chooseLeaderboardLevel', '0');
      }
      else{
        if(tabChangeEvent.index==1){
          console.log('Medium leaderboard listed');
          localStorage.setItem('chooseLeaderboardLevel', '1'); 
        }
        else{
          console.log('Hard leaderboard listed');
          localStorage.setItem('chooseLeaderboardLevel', '2'); 
        }
      }
  }

}
