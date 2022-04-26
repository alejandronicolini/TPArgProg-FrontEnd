import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaLaboral } from 'src/app/Modelo/ExperienciaLaboral';
import { ExperiencialaboralService } from 'src/app/Service/experiencialaboral.service';

@Component({
  selector: 'app-listarexperiencia',
  templateUrl: './listarexperiencia.component.html',
  styleUrls: ['./listarexperiencia.component.css']
})
export class ListarexperienciaComponent implements OnInit {

  listaExpLaboral: ExperienciaLaboral[];
  usuario: string;
  visible: boolean;

  constructor(private serviceExpLaboral: ExperiencialaboralService, private router: Router) { }

  ngOnInit(): void {
     this.serviceExpLaboral.getlistaExpLaboral()
      .subscribe(data => { this.listaExpLaboral = data; })

      this.usuario = localStorage.getItem("user");
      if (this.usuario == "admin") {
        this.visible = true;
      } else {
        this.visible = false;
      }

  }
 
  Nuevo() {
    this.router.navigate(["add-explaboral"]);
  }

  Editar(objExplab: ExperienciaLaboral): void {
    localStorage.setItem("id_explab", objExplab.id_expLaboral.toString());
    this.router.navigate(["edit-explaboral"]);
  }

  Delete(objExplab: ExperienciaLaboral) {
    this.serviceExpLaboral.deleteExpLaboral(objExplab)
       .subscribe(data => {
        this.listaExpLaboral = this.listaExpLaboral.filter(p => p !== objExplab);
        alert("Estudio eliminando....");
      })
  }

  onDropped(event: CdkDragDrop<any>) {
    moveItemInArray(this.listaExpLaboral, event.previousIndex, event.currentIndex);
  }

}
