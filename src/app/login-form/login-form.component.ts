import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { RestClient } from '../api.service';
import { User } from '../Models/user';


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

  constructor(private router: Router, public afAuth: AngularFireAuth, private restClient: RestClient) { }

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
    this.restClient.loginUser(username, password).subscribe(
      data => {
        console.log(data['token']);
        console.log(data['name']);
        console.log(data['email']);

        var user = new User();
        user.name = data['name'];
        user.email = data['email'];
        user.token = data['token'];
        
        localStorage.setItem('LoggedUser', user.name); 
        localStorage.setItem('activeToken', user.token); 
        console.log('login success as ' + user.name);
        this.router.navigate(['test']);
      },
      err => {
        // TODO: Show unsuccesful login
        console.log(err);
        console.log('invalid log in');
      }
    );
  }

  clickOnSignOut(){
    this.user='';
    this.visible_loginUser = true;
  }

}
