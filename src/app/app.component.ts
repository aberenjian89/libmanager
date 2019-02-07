import { Component, ViewChild } from "@angular/core";
import { MatMenuTrigger } from "@angular/material";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  title = "libmanager";
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  flag = false;
  OpenMenu(e) {
    debugger;
    // this.trigger.openMenu();
  }
}
