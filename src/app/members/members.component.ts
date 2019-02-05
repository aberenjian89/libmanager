import { Component } from "@angular/core";
import { MatDialog } from "@angular/material";
import { NewMemberComponent } from "../new-member/new-member.component";
import { MembersTableComponent } from "../members-table/members-table.component";

@Component({
  selector: "app-members",
  templateUrl: "./members.component.html",
  styleUrls: ["./members.component.sass"]
})
export class MembersComponent {
  constructor(public dialog: MatDialog) {}

  OpenDialog() {
    const dialogRef = this.dialog.open(NewMemberComponent);
  }
}
