import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})

export class apiService {

  private url = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  public postRegister(user: User) {
    this.httpClient.post(this.url+'/register', user).subscribe(
      res => {
        console.log(res);
        return res.toString();
      });
      return null;
    }

  postLogin(user: User):
    Observable<User>{
      return this.httpClient.post<User>(this.url + '/login', user, {
        headers: new HttpHeaders({'Content-Type':  'application/json', })
      })
  }
  public getTranList() {
    return this.httpClient.get(this.url + '/transactions');
  }
  public postTran(obj) {
    return this.httpClient.post(this.url + '/transactions', obj, {
      headers: new HttpHeaders({'Content-Type':  'application/json', })
    });
  }

}
