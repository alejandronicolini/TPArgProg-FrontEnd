import { Persona } from 'src/app/Modelo/Persona';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/Service/persona.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading: boolean = false;
  errorinicio: boolean = false;
  persona: Persona = new Persona();

  constructor(private router: Router, private persoService: PersonaService) { }

  ngOnInit(): void {
  }

  login(objPersona: Persona) {
    this.loading = true;
    this.persoService.loginService(objPersona).subscribe(data => this.iniciarSesion(data));

  }

  iniciarSesion(respuestaBD: any) {
    this.loading = false;
    if (respuestaBD) {
      //localStorage.setItem("usuario", JSON.stringify(respuestaBD));
      localStorage.setItem("user", "admin");
      console.log(localStorage.getItem("user"));
      //this.router.navigate(["Home"]);
      this.ReloadHome();
    } else {
      this.errorinicio = true;

    }
  }

  Cancelar() {
    //this.persona = null;
    this.router.navigate(["Home"]);
    localStorage.setItem("user", "invitado");
    console.log(localStorage.getItem("user"));
    //this.ReloadHome();
  }

  ReloadHome() {
    this.router.navigate(["Home"]).then(() => { window.location.reload(); });
  }

}
