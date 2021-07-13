import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http : HttpClient) {
  }

  getJWT(){
    const myheader = new HttpHeaders().set('Content-Type', 'application/json')
    let body = {
      "userName": "noobmaster_420",
      "password": "hunter2"
    };
    return this.http
      .post('http://localhost:8080/loginapi', body, {headers: myheader});
  }
}
