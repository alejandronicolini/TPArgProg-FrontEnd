import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/Modelo/Proyectos';
import { ProyectoService } from 'src/app/Service/proyecto.service';
import { TokenService } from 'src/app/Service/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listarproyecto',
  templateUrl: './listarproyecto.component.html',
  styleUrls: ['./listarproyecto.component.css']
})
export class ListarproyectoComponent implements OnInit {

  listaProyectos: Proyectos[];
  usuario: string;
  visible: boolean = false;
  columnas: number = 1;


  constructor(private serviceProy: ProyectoService, private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.serviceProy.getlistaProyectos()
      .subscribe(data => { this.listaProyectos = data; })

    this.visible = this.tokenService.isAdmin();

  }


  Nuevo() {
    this.router.navigate(["add-proyecto"]);
  }


  Editar(objProy: Proyectos): void {
    localStorage.setItem("id_proyecto", objProy.id_proyecto.toString());
    this.router.navigate(["edit-proyecto"]);
  }

  Delete(objProy: Proyectos) {
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
        this.serviceProy.deleteProyecto(objProy)
          .subscribe(data => {
            this.listaProyectos = this.listaProyectos.filter(p => p !== objProy);
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
    moveItemInArray(this.listaProyectos, event.previousIndex, event.currentIndex);
  }

}
