import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.sass"],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  email = "";
  password = "";

  ngOnInit() {}

  onSubmit() {
    this.authService
      .AuthenticateAdmin({
        email: this.email,
        password: this.password
      })
      .subscribe(res => {
        this.authService.SetAuthToken({
          token: res.auth_token,
          expiresIn: res.expiresIn
        });
        this.router.navigate(["/members"]);
      });
  }
}
