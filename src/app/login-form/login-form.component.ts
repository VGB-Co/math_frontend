import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  visible_loginUser=true;
  visible_registerUser=false;
  visible_who_is_loggedIn=false;
  visible_loginOrRegisterUser=true;
  user = '';

  constructor() { }

  ngOnInit() {
  }

  clickOnLogIn(){
    this.visible_loginOrRegisterUser=true;
    this.visible_loginUser=true;
    this.visible_registerUser=false;
  }

  clickOnRegister(){
    this.visible_loginOrRegisterUser=true;
    this.visible_loginUser=false;
    this.visible_registerUser=true;
  }

  loginUser(e){
    e.preventDefault();
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    this.user = username;
    console.log('username was: ' + username);
    console.log('password was: ' + password);

    if(username == 'user' && password == 'user'){
      console.log('login success');
      this.visible_loginUser = false;
      this.visible_who_is_loggedIn = true;
      this.visible_loginOrRegisterUser=false;
    }
  }

  clickOnSignOut(){
    this.user='';
    this.visible_who_is_loggedIn = false;
    this.visible_loginOrRegisterUser=true;
    this.visible_loginUser = true;
  }

}
