import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  visibleLogin = true;
  visibleRegister = false;

  constructor() { }

  ngOnInit() {
  }

  login(){
    this.visibleLogin = true;
    this.visibleRegister = false;
    console.log("log in is choosed");
  }

  register(){
    this.visibleRegister = true;
    this.visibleLogin = false;
    console.log("resgister is choosed");
  }

}
