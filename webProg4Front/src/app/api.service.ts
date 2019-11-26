import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  private url= "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }


}
