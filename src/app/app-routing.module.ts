import { NgModule } from "@angular/core";
import { Routes, RouterModule, CanActivate } from "@angular/router";
import { MembersComponent } from "./members/members.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuardService } from "./services/auth-guard.service";
import { AuthDeactiveService } from "./services/auth-decative.service";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    canActivate: [AuthDeactiveService]
  },
  {
    path: "members",
    component: MembersComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "",
    redirectTo: "/members",
    pathMatch: "full",
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
