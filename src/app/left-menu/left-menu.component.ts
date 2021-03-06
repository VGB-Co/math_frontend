import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  user='';

  constructor() { }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    if(localStorage){
      if(this.user!=null){
        this.user=localStorage.getItem('LoggedUser');
      } 
    }
  }

  logOut(){
    console.log(localStorage.getItem('LoggedUser') + ' successfully logged out');
    localStorage.removeItem('activeToken');
    localStorage.removeItem('LoggedUser');
    localStorage.removeItem('chooseLeaderboardLevel');
  }

}
