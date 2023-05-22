import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';
import { AuthservicesService } from '../services/authservices.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private _authService:AuthservicesService,private _router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('token')!==null){
        if(jwtDecode(localStorage.getItem('token')||"")){
    return true;
  }
else{
  localStorage.removeItem('token')
  localStorage.removeItem('userId')
  
this._authService.token="";
this._authService.userId=""
this._router.navigate(['/login'])
  return false
}
}

  else{
    this._router.navigate(['/login'])
    return false
  }
}
}
