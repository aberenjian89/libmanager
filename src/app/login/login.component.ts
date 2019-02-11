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
  error_message = ""

  ngOnInit() {
    this.authService.getAuthStatusListener()
    .subscribe((Authenticate)=>{
      if (Authenticate){
        this.router.navigate(['/members'])
      }
    })
  }

  onSubmit() {
    this.authService.onLogin({email: this.email,password: this.password})
    this.authService.getAuthStatusListener()
    .subscribe((Authenticated)=>{
      if (Authenticated){
        this.router.navigate(['/members'])
        this.error_message = ""
      }
      else{
        this.error_message = "Wrong Password or Email"
      }
    })

  }
}
