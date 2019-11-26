import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class apiService {

  private url = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }
  public postLogin(obj) {

    return this.httpClient.post(this.url + '/login', obj, {
      headers: new HttpHeaders({'Content-Type':  'application/json', })
    });
  }
  public getTranList() {
    return this.httpClient.get(this.url + '/transactions');
  }
  public postTran(obj) {
    return this.httpClient.post(this.url + '/transactions', obj, {
      headers: new HttpHeaders({'Content-Type':  'application/json', })
    });
  }
  public postRegister(obj) {
    return this.httpClient.post(this.url + '/register', obj, {
      headers: new HttpHeaders({'Content-Type':  'application/json',  'Access-Control-Allow-Origin': '*' })
    });
  }
}
