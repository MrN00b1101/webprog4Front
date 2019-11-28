import { Component } from '@angular/core';
import { Transaction } from '../transaction';
import { loggedIn } from '../logged.service';
import {apiService} from '../api.service';

@Component({
  selector: 'app-tranAdd',
  templateUrl: './tranAdd.component.html'
})

export class tranAdd{
  constructor(
    private loggedin: loggedIn,
    private apiService: apiService) { }
  enterdValue = '';
  enterdDescription = '';
  result = '';
  transaction: Transaction;
  public onAdd() {
    this.transaction = {value: parseInt(this.enterdValue, 10), description: this.enterdDescription, username: this.loggedin.get()};
    this.apiService.postTran(this.transaction).subscribe((response) => {
      this.enterdValue = '';
      this.enterdDescription = '';
      this.result = 'Sikeres művelet';
    });
  }
}
