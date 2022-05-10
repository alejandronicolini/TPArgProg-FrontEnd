import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPersonal } from 'src/app/Modelo/InfoPersonal';
import { Persona } from 'src/app/Modelo/Persona';
import { InfopersonalService } from 'src/app/Service/infopersonal.service';
import { PersonaService } from 'src/app/Service/persona.service';
import { TokenService } from 'src/app/Service/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  persona:Persona;
  infoPersonal:InfoPersonal;
  sesion: string= "invitado";
  visible: boolean = false;
  
  constructor(private persoService:PersonaService, private infoPersonalService: InfopersonalService, private router:Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.persoService.getPersonaId()
    .subscribe(data=>{
      this.persona=data;
    })

    this.infoPersonalService.getInfoPersonalId(1).
    subscribe(data => {
      this.infoPersonal = data;
    })

    this.visible = this.tokenService.isAdmin();
    this.sesion= this.tokenService.isAdmin()? 'admin' : 'invitado';

    //login previo
      /* this.usuario = localStorage.getItem("user");
      if (this.usuario == "admin") {
        this.visible = true;
      } else {
        this.visible = false;
      } */

  }

  Editar(persona:Persona):void{
    localStorage.setItem("id_persona",persona.id_persona.toString());
    this.router.navigate(["edit-persona"]);
  }


  InfoContacto():void{
    Swal.fire({
      icon: 'info',
      title: this.persona.nombre+" "+this.persona.apellido,
      html: "<b>Email: </b>"+this.persona.email+'<br>'+"<b>Teléfono: </b>"+this.infoPersonal.telefono,
      
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }


}
