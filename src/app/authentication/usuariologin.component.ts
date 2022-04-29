import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from '../models/login-usuario';
import { AuthService } from '../Service/auth.service';
import { TokenService } from '../Service/token.service';

@Component({
  selector: 'app-usuariologin',
  templateUrl: './usuariologin.component.html',
  styleUrls: ['./usuariologin.component.css']
})
export class UsuariologinComponent implements OnInit {

  loginUsuario: LoginUsuario;
  nombreUsuario: string;
  password: string;

  loading: boolean = false;
  errorinicio: boolean = false;

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(): void {
    this.loading = true;
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(data => {
      this.tokenService.setToken(data.token);
      this.loading = false;
      localStorage.setItem("user", "admin");
      console.log(localStorage.getItem("user"));
      this.router.navigate(['Home']);
    },
      err => {
        this.errorinicio = true;
      }
    );
  }


  Cancelar() {
    this.router.navigate(["Home"]);
    localStorage.setItem("user", "invitado");
    console.log(localStorage.getItem("user"));
  }

}



/* loginUsuario: LoginUsuario;
  nombreUsuario: string;
  password: string;
  errMsj: string;

  constructor(
    private tokenService: TokenService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.tokenService.setToken(data.token);
        this.router.navigate(['/']);
      },
      err => {
        this.errMsj = err.error.message;
      }
    );
  } */