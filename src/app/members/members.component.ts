import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import {Router} from '@angular/router'
import { NewMemberComponent } from "../new-member/new-member.component";
import { MembersTableComponent } from "../members-table/members-table.component";
import { AuthService } from '../services/auth.service';


@Component({
  selector: "app-members",
  templateUrl: "./members.component.html",
  styleUrls: ["./members.component.sass"]
})
export class MembersComponent implements OnInit {
  constructor(public dialog: MatDialog, private auth_service: AuthService, private router: Router) {}


  ngOnInit(){
    this.auth_service.getAuthStatusListener()
    .subscribe((Auth)=>{
      if (!Auth){
        this.router.navigate(['../login'])
      }
    })
  }
  OpenDialog() {
    const dialogRef = this.dialog.open(NewMemberComponent);
  }
}
