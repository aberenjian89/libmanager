import { Component, ViewChild, OnInit, OnDestroy } from "@angular/core";
import { MatMenuTrigger } from "@angular/material";
import { AuthService } from "./services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private authService: AuthService, private router: Router) {}
  title = "libmanager";
  private auth_observable;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  authenticate = false;
  OpenMenu(e) {
    debugger;
    // this.trigger.openMenu();
  }

  OnLogout() {
   this.authService.onLogout()
   this.auth_observable.subscribe(Auth=>{
     if (!Auth){
       this.router.navigate(['/login'])
     }
   })
  }

  ngOnInit() {
   this.authService.AutoAuthenticateAdmin()
   this.auth_observable =this.authService.getAuthStatusListener()
   this.auth_observable.subscribe(Auth=>{
     if (Auth){
       this.authenticate = true
     }else{
       this.authenticate = false
     }
   })
  }

  ngOnDestroy(){
    this.auth_observable.unsubscribe();
  }



}
