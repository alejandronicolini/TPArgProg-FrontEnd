import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaLaboral } from 'src/app/Modelo/ExperienciaLaboral';
import { ExperiencialaboralService } from 'src/app/Service/experiencialaboral.service';

@Component({
  selector: 'app-editexperiencia',
  templateUrl: './editexperiencia.component.html',
  styleUrls: ['./editexperiencia.component.css']
})
export class EditexperienciaComponent implements OnInit {

  expLab: ExperienciaLaboral = new ExperienciaLaboral();

  constructor(private router: Router, private serviceExplaboral: ExperiencialaboralService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar() {
    let id = localStorage.getItem("id_explab");
    this.serviceExplaboral.getExpLaboralPorId(+id).subscribe(data => { this.expLab = data })
  }

  Actualizar(objExplab: ExperienciaLaboral) {
    this.serviceExplaboral.updateExpLaboral(objExplab)
      .subscribe(data => {
        this.expLab = data;
        alert("Se Actualizo con Exito...!!!");
        this.router.navigate(["Home"]);
      })
  }

  Cancelar() {
    //this.expLab = null;
    this.router.navigate(["Home"]);
    
  }

}
