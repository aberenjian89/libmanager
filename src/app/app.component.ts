import { Component, ViewChild, OnInit } from "@angular/core";
import { MatMenuTrigger } from "@angular/material";
import { AuthService } from "./services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  title = "libmanager";
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  authenticate = false;
  OpenMenu(e) {
    debugger;
    // this.trigger.openMenu();
  }

  OnLogout() {
    this.authService.LogoutAdmin().subscribe(
      res => {
        this.router.navigate(["/login"]);
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
   this.authService.AutoAuthenticateAdmin()
   this.authService.getAuthStatusListener()
   .subscribe(Auth=>{
     if (Auth){
       this.authenticate = true
     }else{
       this.authenticate = false
     }
   })
  }
}
