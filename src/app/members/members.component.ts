import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Router } from "@angular/router";
import { NewMemberComponent } from "../new-member/new-member.component";
import { MembersTableComponent } from "../members-table/members-table.component";
import { MembersTableDataSource } from "../members-table/members-table-datasource";
import { AuthService } from "../services/auth.service";
import { MembersService } from "../services/members.service";

@Component({
  selector: "app-members",
  templateUrl: "./members.component.html",
  styleUrls: ["./members.component.sass"]
})
export class MembersComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private auth_service: AuthService,
    private router: Router,
    private member_service: MembersService,
    private member_table: MembersTableDataSource
  ) {}

  ngOnInit() {
    this.auth_service.getAuthStatusListener().subscribe(Auth => {
      if (!Auth) {
        this.router.navigate(["../login"]);
      }
    });
    this.member_service.fetchmembers().subscribe(res => {
      this.member_table.data = [res];
    });
  }
  OpenDialog() {
    const dialogRef = this.dialog.open(NewMemberComponent);
  }
}
