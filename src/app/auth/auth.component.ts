import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.sass"],
  encapsulation: ViewEncapsulation.None
})
export class AuthComponent implements OnInit {
  constructor() {}

  email = "";
  password = "";

  ngOnInit() {}

  onSubmit() {}
}
