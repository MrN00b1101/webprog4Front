import { Component } from '@angular/core';
import {apiService} from '../api.service';
import {loggedIn} from '../logged.service';
import { User} from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class login {

  constructor(
    private apiService: apiService,
    private loggedIn: loggedIn) { }

  enterdUserName = '';
  enterdPassword = '';
  user:User;
  loggedUser: User;
  public onLogin() {
    this.user = {username: this.enterdUserName, pass: this.enterdPassword};
    this.apiService.postLogin({username: this.enterdUserName, pass: this.enterdPassword}).subscribe((response) => {
      this.loggedUser = response;
      this.loggedIn.set(this.loggedUser);


    });
  }
}
