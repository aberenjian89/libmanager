import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NewMemberComponent } from "./new-member/new-member.component";

const routes: Routes = [
  {
    path: "new-member",
    component: NewMemberComponent
  },
  {
    path: "",
    redirectTo: "/new-member",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
