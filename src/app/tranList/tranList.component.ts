import { Component, OnInit} from '@angular/core';
import { Transaction } from '../transaction';
import {loggedIn} from '../logged.service';
import {apiService} from '../api.service';

@Component({
  selector: 'app-tranList',
  templateUrl: './tranList.component.html'
})

export class tranList implements OnInit{
  transactions = [];
  any = '';
  constructor(
    private loggedIn: loggedIn,
    private apiService: apiService) { }
  ngOnInit() {
    
    this.apiService.getTranList(this.loggedIn.get()).subscribe((response) => {
      this.transactions = JSON.parse(JSON.stringify(response));
      


    });
  }
}
