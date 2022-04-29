import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { InfoPersonal } from 'src/app/Modelo/InfoPersonal';
import { Persona } from 'src/app/Modelo/Persona';
import { PersonaService } from 'src/app/Service/persona.service';
import { InfopersonalService } from 'src/app/Service/infopersonal.service';
import { TokenService } from 'src/app/Service/token.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  persona: Persona;
  infoPersonal: InfoPersonal;
  nombreUsuario: string = "";
  visible: boolean = false;


  constructor(private persoService: PersonaService, private infoPersonalService: InfopersonalService, private router: Router, private tokenService: TokenService) { }


  ngOnInit(): void {

    this.persoService.getPersonaId()
      .subscribe(data => {
        this.persona = data;
      })

    this.infoPersonalService.getInfoPersonalId(1).
      subscribe(data => {
        this.infoPersonal = data;
      })

    this.visible = this.tokenService.isAdmin();


    //login previo
    /* this.usuario = localStorage.getItem("user");
    if (this.usuario == "admin") {
      this.visible = true;
    } else {
      this.visible = false;
    } */

  }

  login() {  //OK
    this.router.navigate(["login"]);
  }

  logout() { //OK
    Swal.fire({
      title: 'Esta seguro?',
      text: "Esta a punto de cerrar sesion!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Cerrar Sesion!'
    }).then((result) => {
      if (result.value) {
        this.tokenService.logOut();
        this.router.navigate(["login"]);
      }
    }
    )
    
  }

/* logout() { //OK
    this.tokenService.logOut();
    window.location.reload();

    
  } */

}
