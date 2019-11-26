import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  private url = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }
  public getLogin(obj) {
    return this.httpClient.get(this.url + '/login', obj);
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
      headers: new HttpHeaders({'Content-Type':  'application/json', })
    });
  }
}
