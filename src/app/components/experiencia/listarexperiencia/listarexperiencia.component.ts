import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaLaboral } from 'src/app/Modelo/ExperienciaLaboral';
import { ExperiencialaboralService } from 'src/app/Service/experiencialaboral.service';
import { TokenService } from 'src/app/Service/token.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-listarexperiencia',
  templateUrl: './listarexperiencia.component.html',
  styleUrls: ['./listarexperiencia.component.css']
})
export class ListarexperienciaComponent implements OnInit {

  listaExpLaboral: ExperienciaLaboral[];
  usuario: string;
  visible: boolean = false;
  columnas: number = 1;

  constructor(private serviceExpLaboral: ExperiencialaboralService, private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.serviceExpLaboral.getlistaExpLaboral()
      .subscribe(data => { this.listaExpLaboral = data; })

    this.visible = this.tokenService.isAdmin();

  }

  Nuevo() {
    this.router.navigate(["add-explaboral"]);
  }

  Editar(objExplab: ExperienciaLaboral): void {
    localStorage.setItem("id_explab", objExplab.id_expLaboral.toString());
    this.router.navigate(["edit-explaboral"]);
  }


  Delete(objExplab: ExperienciaLaboral) {
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
        this.serviceExpLaboral.deleteExpLaboral(objExplab)
          .subscribe(data => {
            this.listaExpLaboral = this.listaExpLaboral.filter(p => p !== objExplab);
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
    moveItemInArray(this.listaExpLaboral, event.previousIndex, event.currentIndex);
  }

}
