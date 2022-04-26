import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPersonal } from 'src/app/Modelo/InfoPersonal';
import { InfopersonalService } from 'src/app/Service/infopersonal.service';

@Component({
  selector: 'app-infopersonal',
  templateUrl: './infopersonal.component.html',
  styleUrls: ['./infopersonal.component.css']
})
export class InfopersonalComponent implements OnInit {

  infoPersonal : InfoPersonal = new InfoPersonal();

  constructor(private router:Router, private infoPersoService:InfopersonalService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id_infopersonal");
    this.infoPersoService.getInfoPersonalId(1)
    .subscribe(data=>{
      this.infoPersonal=data;
    })
  }

  Actualizar(objInfoPersonal:InfoPersonal){
    this.infoPersoService.updateInfoPersonal(objInfoPersonal)
    .subscribe(data=>{
      this.infoPersonal=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["Home"]);
    })
  }

  Cancelar(){
    //this.infoPersonal = null;
    this.router.navigate(["Home"]);
  }

}
