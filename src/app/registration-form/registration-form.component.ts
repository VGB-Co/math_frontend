import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  user = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  registerUser(e){
    e.preventDefault();
    var email = e.target.elements[0].value;
    var username = e.target.elements[1].value;
    var password = e.target.elements[2].value;
    var password2 = e.target.elements[3].value;
    this.user = username;

    if(password == password2){
      localStorage.setItem('LoggedUser',this.user); 
      this.router.navigate(['test']); 
      console.log('email set: ' + email);
      console.log('username set: ' + username);
      console.log('password set: ' + password);
      console.log('registration success as ' + this.user);
      //this.visible_loginOrRegisterUser=false;
      //this.visible_loginUser = false;
      //this.visible_registerUser=false;
      //this.visible_who_is_loggedIn = true;
    }
    else{
      console.log('invalid registration');
    }
  }

}
