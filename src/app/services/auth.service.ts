import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  loginroute = "api/new_session"
  logoutroute = "api/logout"


  AuthenticateAdmin(user){
    let email = user.email
    let password = user.password
    // return this.http.post<{current_user: {first_name: String,last_name: String, email: String},auth_token: String}>(this.loginroute,{email,password}),(res)=>{
    //   debugger
    // };
  }

  LogoutAdmin(){

  }

  AutoAuthenticateAdmin(){

  }
}
