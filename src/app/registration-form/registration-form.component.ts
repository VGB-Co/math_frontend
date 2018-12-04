import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { RestClient } from '../api.service';
import { User } from '../Models/user';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  user = '';

  constructor(private router: Router, private restClient: RestClient) { }

  ngOnInit() {
  }

  registerUser(e){
    e.preventDefault();
    var email = e.target.elements[0].value;
    var username = e.target.elements[1].value;
    var password = e.target.elements[2].value;
    var password2 = e.target.elements[3].value;
    this.user = username;
    this.restClient.registerUser(username, password, email).subscribe(
      data => {
        console.log(data['token']);
        console.log(data['name']);
        console.log(data['email']);

        var user = new User();
        user.name = data['name'];
        user.email = data['email'];
        user.token = data['token'];

      localStorage.setItem('LoggedUser',this.user); 
      console.log('registration success as ' + this.user);
      this.router.navigate(['test']);
    }, 
      err => {
        // TODO: Show unsuccesful login
        console.log(err);
        console.log('invalid registration');
      }
    );
  }

}
