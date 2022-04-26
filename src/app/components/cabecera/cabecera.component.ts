import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPersonal } from 'src/app/Modelo/InfoPersonal';
import { Persona } from 'src/app/Modelo/Persona';
import { InfopersonalService } from 'src/app/Service/infopersonal.service';
import { PersonaService } from 'src/app/Service/persona.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  persona:Persona;
  infoPersonal:InfoPersonal;
  usuario: string;
  visible: boolean;
  sesion:string;
  
  constructor(private persoService:PersonaService, private infoPersonalService: InfopersonalService, private router:Router) { }

  ngOnInit(): void {
    this.persoService.getPersonaId()
    .subscribe(data=>{
      this.persona=data;
    })

    this.infoPersonalService.getInfoPersonalId(1).
    subscribe(data => {
      this.infoPersonal = data;
    })

    this.usuario = localStorage.getItem("user");

      if (this.usuario == "admin") {
        this.visible = true;
        this.sesion = "admin";
      } else {
        this.visible = false;
        this.sesion = "invitado";
      }

  }

  Editar(persona:Persona):void{
    localStorage.setItem("id_persona",persona.id_persona.toString());
    this.router.navigate(["edit-persona"]);
  }

}
