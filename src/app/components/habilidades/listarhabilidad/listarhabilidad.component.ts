import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/Modelo/Habilidades';
import { HabilidadService } from 'src/app/Service/habilidad.service';
import { TokenService } from 'src/app/Service/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listarhabilidad',
  templateUrl: './listarhabilidad.component.html',
  styleUrls: ['./listarhabilidad.component.css']
})
export class ListarhabilidadComponent implements OnInit {

  listaHabilidades: Habilidades[];
  usuario: string;
  visible: boolean = false;
  columnas: number = 1;

  @ViewChild('closebutton') closebutton: ElementRef;

  constructor(private serviceHabilidad: HabilidadService, private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.serviceHabilidad.getlistaHabilidades()
      .subscribe(data => { this.listaHabilidades = data; })

    this.visible = this.tokenService.isAdmin();

  }

  Nuevo() {
    this.router.navigate(["add-habilidad"]);
  }


  Editar(objHab: Habilidades): void {
    localStorage.setItem("id_habilidad", objHab.id_habilidad.toString());
    this.router.navigate(["edit-habilidad"]);
  }

  Delete(objHab: Habilidades) {
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
        this.serviceHabilidad.deleteHabilidad(objHab)
          .subscribe(data => {
            this.listaHabilidades = this.listaHabilidades.filter(p => p !== objHab);
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
    moveItemInArray(this.listaHabilidades, event.previousIndex, event.currentIndex);
  }

}
