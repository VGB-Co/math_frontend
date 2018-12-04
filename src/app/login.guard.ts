import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { RestClient } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private _restClient: RestClient,
              private _router: Router) { }

    canActivate(): boolean {
    if(this._restClient.loggedIn()){
      return true
    } else {
      this._router.navigate(['/login-screen'])
      return false
    }
  }

}
