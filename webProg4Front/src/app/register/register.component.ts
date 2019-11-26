import { Component } from '@angular/core';
import {apiService} from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})

export class register{
  constructor(private apiService: apiService) { }



}
