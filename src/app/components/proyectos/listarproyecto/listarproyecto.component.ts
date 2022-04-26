import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/Modelo/Proyectos';
import { ProyectoService } from 'src/app/Service/proyecto.service';

@Component({
  selector: 'app-listarproyecto',
  templateUrl: './listarproyecto.component.html',
  styleUrls: ['./listarproyecto.component.css']
})
export class ListarproyectoComponent implements OnInit {

  listaProyectos: Proyectos[];
  usuario: string;
  visible: boolean;

  constructor(private serviceProy: ProyectoService, private router: Router) { }

  ngOnInit(): void {
    this.serviceProy.getlistaProyectos()
      .subscribe(data => { this.listaProyectos = data; })

    this.usuario = localStorage.getItem("user");
    if (this.usuario == "admin") {
      this.visible = true;
    } else {
      this.visible = false;
    }

  }


  //metodo para acceder a la ruta del componente AddEducacionComponent
  Nuevo() {
    this.router.navigate(["add-proyecto"]);
  }


  Editar(objProy: Proyectos): void {
    localStorage.setItem("id_proyecto", objProy.id_proyecto.toString());
    this.router.navigate(["edit-proyecto"]);
  }

  Delete(objProy: Proyectos) {
    this.serviceProy.deleteProyecto(objProy)
      .subscribe(data => {
        this.listaProyectos = this.listaProyectos.filter(p => p !== objProy);
        alert("Proyecto eliminado....");
      })
  }

  onDropped(event: CdkDragDrop<any>) {
    moveItemInArray(this.listaProyectos, event.previousIndex, event.currentIndex);
  }

}
