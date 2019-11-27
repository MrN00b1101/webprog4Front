import { Component } from '@angular/core';
import { loggedIn } from './logged.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webProg4Front';
  loggedIn: loggedIn;


}
