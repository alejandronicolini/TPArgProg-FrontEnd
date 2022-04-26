import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/Service/persona.service';
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-editpersona',
  templateUrl: './editpersona.component.html',
  styleUrls: ['./editpersona.component.css']
})
export class EditpersonaComponent implements OnInit {

  persona : Persona = new Persona();

  constructor(private router:Router, private persoService:PersonaService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id_persona");
    this.persoService.getPersonaId()
    .subscribe(data=>{
      this.persona=data;
    })
  }

  Actualizar(objPersona:Persona){
    this.persoService.updatePersona(objPersona)
    .subscribe(data=>{
      this.persona=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["Home"]);
    })
  }

  Cancelar(){
    //this.persona = null;
    this.router.navigate(["Home"]);
  }

}
