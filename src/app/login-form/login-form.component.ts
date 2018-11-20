import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [AngularFireAuth]
})
export class LoginFormComponent implements OnInit {

  visible_loginUser=true;
  visible_registerUser=false;
  user = '';

  constructor(private router: Router, public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  clickOnLogIn(){
    this.visible_loginUser=true;
    this.visible_registerUser=false;
    //this.user=this.afAuth.user.toPromise.name;
    //console.log(this.user);
    //console.log(this.afAuth.user);
  }

  clickOnRegister(){
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
      localStorage.setItem('LoggedUser',this.user); 
      this.router.navigate(['test']);
      console.log('login success as ' + this.user);
      //this.visible_loginOrRegisterUser=false;
      //this.visible_loginUser = false;
      //this.visible_registerUser=false;
      //this.visible_who_is_loggedIn = true;
    }
    else{
      console.log('invalid log in');
    }
  }

  clickOnSignOut(){
    this.user='';
    this.visible_loginUser = true;
  }

}
