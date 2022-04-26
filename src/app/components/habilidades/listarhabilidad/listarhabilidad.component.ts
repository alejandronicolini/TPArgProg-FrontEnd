import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/Modelo/Habilidades';
import { HabilidadService } from 'src/app/Service/habilidad.service';

@Component({
  selector: 'app-listarhabilidad',
  templateUrl: './listarhabilidad.component.html',
  styleUrls: ['./listarhabilidad.component.css']
})
export class ListarhabilidadComponent implements OnInit {

  listaHabilidades: Habilidades[];
  usuario: string;
  visible: boolean;

  constructor(private serviceHabilidad: HabilidadService, private router: Router) { }

  ngOnInit(): void {
     this.serviceHabilidad.getlistaHabilidades()
      .subscribe(data => { this.listaHabilidades = data; })

      this.usuario = localStorage.getItem("user");
      if (this.usuario == "admin") {
        this.visible = true;
      } else {
        this.visible = false;
      }
      
  }

  Nuevo() {
    this.router.navigate(["add-habilidad"]);
  }


  Editar(objHab: Habilidades): void {
    localStorage.setItem("id_habilidad", objHab.id_habilidad.toString());
    this.router.navigate(["edit-habilidad"]);
  }

  Delete(objHab: Habilidades) {
    this.serviceHabilidad.deleteHabilidad(objHab)
       .subscribe(data => {
        this.listaHabilidades = this.listaHabilidades.filter(p => p !== objHab);
        alert("Habilidad eliminada....");
      })
  }

  onDropped(event: CdkDragDrop<any>) {
    moveItemInArray(this.listaHabilidades, event.previousIndex, event.currentIndex);
  }

}
