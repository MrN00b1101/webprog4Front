import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { login } from './login/login.component';
import { register } from './register/register.component';
import { tranAdd } from './tranAdd/tranAdd.component';
import { tranList } from './tranList/tranList.component';
import { profile } from './profile/profile.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    login,
    register,
    tranAdd,
    tranList,
    profile
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
