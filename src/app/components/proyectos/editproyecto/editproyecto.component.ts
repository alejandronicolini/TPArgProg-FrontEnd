import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/Modelo/Proyectos';
import { ProyectoService } from 'src/app/Service/proyecto.service';

@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.css']
})
export class EditproyectoComponent implements OnInit {

  proyecto:Proyectos = new Proyectos();
  
  constructor(private router:Router, private serviceProy:ProyectoService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id_proyecto");
    let idNumber= Number(id);
    this.serviceProy.getProyectoPorId(idNumber).subscribe(data=>{this.proyecto=data})
  }

  Actualizar(objEducacion:Proyectos){
    this.serviceProy.updateProyecto(objEducacion)
    .subscribe(data=>{
      this.proyecto=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["Home"]);
    })
  }

  Cancelar(){
    this.proyecto = null;
    this.router.navigate(["Home"]);
  }

}
