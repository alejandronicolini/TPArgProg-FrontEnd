import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { TokenService } from '../Service/token.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  realRol: string;

  constructor(private tokenService: TokenService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRol = route.data['expectedRol'];
    this.realRol = this.tokenService.isAdmin()? 'admin' : 'user';

    if (!this.tokenService.isLogged() || expectedRol.indexOf(this.realRol) < 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No tienes permisos para acceder a esta página. Debes estar Logueado'
      });

      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}