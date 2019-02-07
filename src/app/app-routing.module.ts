import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MembersComponent } from "./members/members.component";
import { AuthComponent } from "./auth/auth.component";

const routes: Routes = [
  {
    path: "login",
    component: AuthComponent
  },
  {
    path: "members",
    component: MembersComponent
  },
  {
    path: "",
    redirectTo: "/members",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
