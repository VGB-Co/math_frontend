import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [AngularFireAuth]
})
export class LoginFormComponent implements OnInit {

  visible_loginUser=true;
  visible_registerUser=false;
  visible_who_is_loggedIn=false;
  visible_loginOrRegisterUser=true;
  user = '';

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  clickOnLogIn(){
    this.visible_loginOrRegisterUser=true;
    this.visible_loginUser=true;
    this.visible_registerUser=false;
    //this.user=this.afAuth.user.toPromise.name;
    //console.log(this.user);
    //console.log(this.afAuth.user);
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
      this.visible_loginOrRegisterUser=false;
      this.visible_loginUser = false;
      this.visible_registerUser=false;
      this.visible_who_is_loggedIn = true;
    }
  }

  registerUser(e){
    e.preventDefault();
    var email = e.target.elements[0].value;
    var username = e.target.elements[1].value;
    var password = e.target.elements[2].value;
    var password2 = e.target.elements[3].value;
    this.user = username;
    console.log('email set: ' + email);
    console.log('username set: ' + username);
    console.log('password set: ' + password);

    if(password == password2){
      console.log('registration success');
      this.visible_loginOrRegisterUser=false;
      this.visible_loginUser = false;
      this.visible_registerUser=false;
      this.visible_who_is_loggedIn = true;
    }
  }

  clickOnSignOut(){
    this.user='';
    this.visible_who_is_loggedIn = false;
    this.visible_loginOrRegisterUser=true;
    this.visible_loginUser = true;
  }

}
