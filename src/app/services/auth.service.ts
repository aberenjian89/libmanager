import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

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
  constructor(private http: HttpClient) {}

  islogined = false;
  loginroute = "api/new_session";
  logoutroute = "api/logout";
  verifytokenroute = "api/validate_token";
  current_user = null;

  AuthenticateAdmin(user): Observable<current_user> {
    let email = user.email;
    let password = user.password;
    return this.http.post<current_user>(this.loginroute, { email, password });
  }

  isLogin(): boolean {
    return this.islogined;
  }

  LogoutAdmin(): Observable<{ message: String }> {
    return this.http.delete<{ message: String }>(this.logoutroute);
  }

  AutoAuthenticateAdmin(): Observable<{ message: String }> {
    let auth_token = this.GetAuthToken().auth_token;
    return this.http.get<{ message: String }>(
      this.verifytokenroute + `?token=${auth_token}`
    );
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
