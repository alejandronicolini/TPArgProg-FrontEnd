import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/Modelo/Educacion';
import { EducacionService } from 'src/app/Service/educacion.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-listareducacion',
  templateUrl: './listareducacion.component.html',
  styleUrls: ['./listareducacion.component.css']
})
export class ListareducacionComponent implements OnInit {

  listaEducacion: Educacion[];
  usuario: string;
  visible: boolean;

  constructor(private serviceEduc: EducacionService, private router: Router) { }

  ngOnInit(): void {
     this.serviceEduc.getlistaEducacion()
      .subscribe(data => { this.listaEducacion = data; })
      

      //login
      this.usuario = localStorage.getItem("user");
      if (this.usuario == "admin") {
        this.visible = true;
      } else {
        this.visible = false;
      }

  }


  //metodo para acceder a la ruta del componente AddEducacionComponent
  Nuevo() {
    this.router.navigate(["add-educacion"]);
  }

//NO lo uso con routerlink
  Editar(objEduc: Educacion): void {
    localStorage.setItem("id_educacion", objEduc.id_educacion.toString());
    this.router.navigate(["edit-educacion"]);
  }

  Delete(objEduc: Educacion) {
    this.serviceEduc.deleteEducacion(objEduc)
       .subscribe(data => {
        this.listaEducacion = this.listaEducacion.filter(p => p !== objEduc);
        alert("Estudio eliminando....");
      })
  }

  onDropped(event: CdkDragDrop<any>) {
    moveItemInArray(this.listaEducacion, event.previousIndex, event.currentIndex);
  }

}
