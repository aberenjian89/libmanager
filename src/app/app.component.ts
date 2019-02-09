import { Component, ViewChild, OnInit } from "@angular/core";
import { MatMenuTrigger } from "@angular/material";
import { AuthService } from "./services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}
  title = "libmanager";
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  authenticate = false;
  OpenMenu(e) {
    debugger;
    // this.trigger.openMenu();
  }

  ngOnInit() {
    this.authenticate = this.authService.AutoAuthenticateAdmin();
  }
}
