import { Component } from '@angular/core';
import {loggedIn} from '../logged.service';
import { apiService} from '../api.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})

export class profile{
  constructor(
    private apiService: apiService,
    private loggedIn: loggedIn) { }
    ress = '';
    public onLogout() {

      this.apiService.getLogout().subscribe((response) => {
      sessionStorage.clear();


      });
    }

}
