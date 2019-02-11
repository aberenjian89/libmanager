import {Injectable} from '@angular/core'
import {Router, CanActivate} from '@angular/router'
import { AuthService } from './auth.service'


@Injectable()
export class AuthGuardService implements CanActivate{
  constructor (private auth_service: AuthService, private router: Router){}
  canActivate(): boolean{
    console.log("Auth Guard")
    if (!this.auth_service.isAuthenticated){
      this.router.navigate(['/login'])
      return false
    }
    return true
  }
}
