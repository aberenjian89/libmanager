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
        this.authService.islogined = true;
        this.authService.current_user = {
          _id: res.current_user._id,
          first_name: res.current_user.first_name,
          last_name: res.current_user.last_name,
          email: res.current_user.email
        };
        this.router.navigate(["/members"]);
      });
  }
}
