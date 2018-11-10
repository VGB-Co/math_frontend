import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  visible_loginUser=true;

  constructor() { }

  ngOnInit() {
  }

  loginUser(e){
    e.preventDefault();
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    console.log('username was: ' + username);
    console.log('password was: ' + password);

    if(username == 'user' && password == 'user'){
      console.log('login success');
      this.visible_loginUser = false;
    }
  }

}
