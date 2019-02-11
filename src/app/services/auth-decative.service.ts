import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class AuthDeactiveService implements CanActivate {
  constructor(private auth_service: AuthService, private router: Router) {}
  canActivate(): boolean {
    if (this.auth_service.isAuthenticated()) {
      this.router.navigate(["/members"]);
      return false;
    }
    return true;
  }
}
