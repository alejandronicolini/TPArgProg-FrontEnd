import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/Modelo/Educacion';
import { EducacionService } from 'src/app/Service/educacion.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { TokenService } from 'src/app/Service/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listareducacion',
  templateUrl: './listareducacion.component.html',
  styleUrls: ['./listareducacion.component.css']
})
export class ListareducacionComponent implements OnInit {

  listaEducacion: Educacion[];
  usuario: string;
  visible: boolean = false;
  

  constructor(private serviceEduc: EducacionService, private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.serviceEduc.getlistaEducacion()
      .subscribe(data => { this.listaEducacion = data; })

    this.visible = this.tokenService.isAdmin();


    //login previo
    /* this.usuario = localStorage.getItem("user");
    if (this.usuario == "admin") {
      this.visible = true;
    } else {
      this.visible = false;
    } */

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
    Swal.fire({
      title: 'Esta seguro?',
      text: "Esta a punto de eliminar un registro!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.value) {
        this.serviceEduc.deleteEducacion(objEduc)
          .subscribe(data => {
            this.listaEducacion = this.listaEducacion.filter(p => p !== objEduc);
            Swal.fire(
              'Eliminado!',
              'El registro ha sido eliminado.',
              'success'
            )
          })
      }
    })
    
  }

  onDropped(event: CdkDragDrop<any>) {
    moveItemInArray(this.listaEducacion, event.previousIndex, event.currentIndex);
  }

}
