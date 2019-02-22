import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import {
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatSelectModule,
  MatDialogModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
} from "@angular/material";

import { AppComponent } from "./app.component";
import { NewMemberComponent } from "./new-member/new-member.component";
import { MembersComponent } from "./members/members.component";
import { MembersTableComponent } from "./members-table/members-table.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuardService } from "./services/auth-guard.service";
import { AuthDeactiveService } from "./services/auth-decative.service";
import { MembersService } from "./services/members.service";
import { MembersTableDataSource } from "./members-table/members-table-datasource";

@NgModule({
  declarations: [
    AppComponent,
    NewMemberComponent,
    MembersComponent,
    MembersTableComponent,
    LoginComponent,
    MembersTableDataSource
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    FormsModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  entryComponents: [NewMemberComponent],
  providers: [AuthGuardService, AuthDeactiveService, MembersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
