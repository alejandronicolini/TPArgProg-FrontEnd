import { AutenticacionService } from 'src/app/Service/autenticacion.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  //creo el constructor
  constructor(private autenticacionService: AutenticacionService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let usuario = localStorage.getItem("user");
    if (usuario == "admin") {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }

  }


}

/* 
//si el usuario esta autenticado
    let currentUser = this.autenticacionService.UsuarioAutenticado;
    if (currentUser && currentUser.accessToken) {
      return true;
    }
    //si no esta autenticado
    else {
      return false;
    } 
*/