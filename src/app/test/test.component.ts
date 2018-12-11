import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: []
})
export class TestComponent implements OnInit {

  public siteUrl = window.location.href;
  public myId = "testId";

  constructor() { }

  user='';

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

}
