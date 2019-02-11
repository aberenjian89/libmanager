import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject ,Observable, Observer } from "rxjs";
import {Router} from '@angular/router'

interface current_user {
  message: String;
  auth_token: String;
  current_user: {
    _id: String;
    first_name: String;
    last_name: String;
    email: String;
  };
  expiresIn: String;
}

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  private loginroute = "api/new_session";
  private logoutroute = "api/logout";
  private verifytokenroute = "api/validate_token";
  private current_user = null;
  private Authenticated = false
  private token: String
  private authStatusListener = new Subject<boolean>()
  private duration: any


  getToken(): String{
    return this.token
  }

  gettCurrentUser(){
    return this.current_user
  }

  getAuthStatusListener(): Observable<boolean>{
    return this.authStatusListener.asObservable();
  }

  onLogin(user){
      let authdata = {
        email: user.email,
        password: user.password
      }
      this.http.post<current_user>(this.loginroute,authdata)
      .subscribe((response)=>{
        this.token = response.auth_token
        this.duration = response.expiresIn
        this.Authenticated = true
        this.authStatusListener.next(true)
        this.SetAuthToken()
      },err=>{
        this.authStatusListener.next(false)
        this.Authenticated = false
      })
  }

  isAuthenticated(): boolean {
    return this.Authenticated;
  }

  // LogoutAdmin(){
  //  this.http.delete<{message: String}>()
  // }

  AutoAuthenticateAdmin(){
    if (this.GetAuthToken()){
      const token = this.GetAuthToken().auth_token
      this.http.get<{message: String}>(this.verifytokenroute+`?token=${token}`)
      .subscribe((response)=>{
        this.token = token
        this.duration = this.GetAuthToken().expiresIn
        this.authStatusListener.next(true)
        this.Authenticated = true
      },(err)=>{
        this.authStatusListener.next(false)
        this.Authenticated = false
        this.router.navigate(['/login'])
      })
    }else{
      this.router.navigate(['/login'])
    }
  }

  SetAuthToken() {
    sessionStorage.setItem(
      "libmanager",
      JSON.stringify({
        auth_token: this.token,
        expiresIn: this.duration
      })
    );
  }

  RemoveAuthToken() {
    sessionStorage.removeItem("libmanager");
  }

  GetAuthToken() {
    return JSON.parse(sessionStorage.getItem("libmanager"));
  }
}
