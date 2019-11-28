import { Component } from '@angular/core';
import { loggedIn } from './logged.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private loggedIn: loggedIn) { }
  title = 'webProg4Front';

}
