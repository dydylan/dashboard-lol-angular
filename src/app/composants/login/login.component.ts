import { Component, OnInit } from '@angular/core';

import {LoginServiceService} from '../../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginServiceService: LoginServiceService;

  constructor(loginServiceService: LoginServiceService) {
    this.loginServiceService = loginServiceService;
  }

  ngOnInit(): void {
  }

  getToken(){
    this.loginServiceService.getJWT().subscribe(a=>{
      console.log(a);
      },error=> {
      console.log(error);
    });
  }
}
