import { Injectable } from '@angular/core';

import { User } from './user';


@Injectable({
  providedIn: 'root'
})

export class loggedIn {

  constructor() {

  }
   public  set(user: User) {

    sessionStorage.setItem('username', user.username);
   }
   public get() {
     const user = sessionStorage.getItem('username');
     return user == null ? '' : user;

  }
}
