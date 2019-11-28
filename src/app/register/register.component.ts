import { Component } from '@angular/core';
import {apiService} from '../api.service';
import {User} from '../user';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})

export class register {
  enterdRegisterUserName = '';
  enterdRegisterPassword = '';
  user = new User();
  registered = '';
  constructor(private apiService: apiService) { }

  public onRegister() {
    this.user = {username: this.enterdRegisterUserName, pass: this.enterdRegisterPassword};
    this.registered = this.apiService.postRegister(this.user);
    this.enterdRegisterPassword = '';
    this.enterdRegisterUserName = '';
    this.registered ="Sikeres regisztráció";
  }

}
