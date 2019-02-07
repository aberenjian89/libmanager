import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
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
import { AuthComponent } from "./auth/auth.component";

@NgModule({
  declarations: [
    AppComponent,
    NewMemberComponent,
    MembersComponent,
    MembersTableComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
