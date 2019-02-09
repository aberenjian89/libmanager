import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { AuthService } from '../services/auth.service'

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.sass"],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  constructor() {

  }

  email = "";
  password = "";

  ngOnInit() {}

  onSubmit() {
    // this.authService.AuthenticateAdmin({email: this.email,password: this.password})
  }
}
