import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})

export class loggedIn {
   static userName : string = null;

   public  set(userName: string) {
     userName = userName;
   }
   public get() {
    return loggedIn.userName;
  }
}
