import { Component } from '@angular/core';
import {apiService} from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class login {

  constructor(private apiService: apiService) { }

  enterdUserName = '';
  enterdPassword = '';
  user = {};
  loggendIn = '';
  public onRegister() {
    this.user = {username: this.enterdUserName, pass: this.enterdPassword};
    this.apiService.postLogin(this.user).subscribe((response) => {
    //this.loggendIn = response;
    });
  }
}
