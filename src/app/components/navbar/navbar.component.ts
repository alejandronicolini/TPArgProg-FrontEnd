import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { InfoPersonal } from 'src/app/Modelo/InfoPersonal';
import { Persona } from 'src/app/Modelo/Persona';
import { PersonaService } from 'src/app/Service/persona.service';
import { InfopersonalService } from 'src/app/Service/infopersonal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  persona: Persona;
  infoPersonal: InfoPersonal;
  usuario: string;
  visible: boolean;

  constructor(private persoService: PersonaService, private infoPersonalService: InfopersonalService, private router: Router) { }


  ngOnInit(): void {

    this.persoService.getPersonaId()
      .subscribe(data => {
        this.persona = data;
      })

    this.infoPersonalService.getInfoPersonalId(1).
      subscribe(data => {
        this.infoPersonal = data;
      })

    this.usuario = localStorage.getItem("user");
    if (this.usuario == "admin") {
      this.visible = true;
    } else {
      this.visible = false;
    }

  }

  login() {
    this.router.navigate(["login"]);
  }

  logout() {
    localStorage.setItem("user", "invitado");
    this.router.navigate(["Home"]);
    this.ReloadHome();
  }

  ReloadHome() {
     window.location.reload();
  }

  /* ReloadHome() {
    this.router.navigate(["Home"]).then(() => { window.location.reload(); });
  } */



}
