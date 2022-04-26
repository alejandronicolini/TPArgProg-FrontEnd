import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/Modelo/Educacion';
import { EducacionService } from 'src/app/Service/educacion.service';

@Component({
  selector: 'app-editeducacion',
  templateUrl: './editeducacion.component.html',
  styleUrls: ['./editeducacion.component.css']
})
export class EditeducacionComponent implements OnInit {

  educacion: Educacion = new Educacion;

  constructor(private router: Router, private serviceEduc: EducacionService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.Editar();
  }

  //Metodo para routerlink
  /* Editar() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.serviceEduc.getEducacionPorId(id).subscribe(data => { this.educacion = data })
  } */

  Editar(){
    let id=localStorage.getItem("id_educacion");
    this.serviceEduc.getEducacionPorId(+id).subscribe(data=>{this.educacion=data})
  }

  Actualizar(objEducacion: Educacion) {
    this.serviceEduc.updateEducacion(objEducacion)
      .subscribe(data => {
        this.educacion = data;
        alert("Se Actualizo con Exito...!!!");
        this.router.navigate(["Home"]);
      })
  }

  Cancelar() {
    this.educacion = null;
    this.router.navigate(["Home"]);
  }

}
