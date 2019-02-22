import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Router } from "@angular/router";
import { NewMemberComponent } from "../new-member/new-member.component";
import { AuthService } from "../services/auth.service";
import { MembersService } from "./members.service";

@Component({
  selector: "app-members",
  templateUrl: "./members.component.html",
  styleUrls: ["./members.component.sass"]
})
export class MembersComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private auth_service: AuthService,
    private router: Router
  ) {}
  private member_service: MembersService;

  ngOnInit() {
    this.auth_service.getAuthStatusListener().subscribe(Auth => {
      if (!Auth) {
        this.router.navigate(["../login"]);
      }
    });
    console.log(this.member_service);
  }
  OpenDialog() {
    const dialogRef = this.dialog.open(NewMemberComponent);
  }
}
