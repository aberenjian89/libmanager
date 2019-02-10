import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

interface current_user {
  message: String;
  auth_token: String;
  current_user: {
    first_name: String;
    last_name: String;
    email: String;
  };
}

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  islogined = false
  loginroute = "api/new_session";
  logoutroute = "api/logout";
  memberroute = "api/members"

  AuthenticateAdmin(user): Observable<current_user> {
    let email = user.email;
    let password = user.password;
    return this.http.post<current_user>(this.loginroute, { email, password });
  }

  isLogin(): boolean{
    return this.islogined
  }

  LogoutAdmin() {}

  AutoAuthenticateAdmin(): boolean {
    return true;
  }

  SetAuthToken(data) {
    sessionStorage.setItem(
      "libmanager",
      JSON.stringify({
        auth_token: data.token,
        expiresIn: data.expiresIn
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
