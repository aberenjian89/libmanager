import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort } from "@angular/material";
import { MembersTableDataSource } from "./members-table-datasource";
import { MembersService } from "../members/members.service";

@Component({
  selector: "app-members-table",
  templateUrl: "./members-table.component.html",
  styleUrls: ["./members-table.component.css"]
})
export class MembersTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MembersTableDataSource;
  member_service: MembersService;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ["first_name", "last_name", "email"];

  ngOnInit() {
    this.dataSource = new MembersTableDataSource(this.paginator, this.sort);
    // this.member_service.fetchmembers().subscribe(res => {
    //   this.dataSource.data = [res];
    // });
    console.log(this.member_service);
  }
}
