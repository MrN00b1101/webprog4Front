import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { login } from './login/login.component';
import { register } from './register/register.component';
import { tranAdd } from './tranAdd/tranAdd.component';
import { tranList } from './tranList/tranList.component';
import { profile } from './profile/profile.component';
import { header } from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { apiService } from './api.service';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatToolbarModule, MatExpansionModule  } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    login,
    register,
    tranAdd,
    tranList,
    profile,
    header
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [
    apiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
