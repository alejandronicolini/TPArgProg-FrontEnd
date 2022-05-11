import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/Modelo/Habilidades';
import { HabilidadService } from 'src/app/Service/habilidad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addhabilidad',
  templateUrl: './addhabilidad.component.html',
  styleUrls: ['./addhabilidad.component.css']
})
export class AddhabilidadComponent implements OnInit {

  habilidad: Habilidades = new Habilidades();

  constructor(private router: Router, private serviceHabilidad: HabilidadService) { }

  ngOnInit(): void {
    this.habilidad.img_logo = "../../../../assets/imagenes/imagen camara.png";
    this.habilidad.conocimiento = "0";
  }

  Guardar() {
    this.serviceHabilidad.createHabilidad(this.habilidad)
      .subscribe(data => {
        alert("se agrego con exito");
        this.router.navigate(["Home"]);
      })
  }

  Cancelar() {
    this.habilidad = null;
    this.router.navigate(["Home"]);
  }

  Rango() {
    Swal.fire({
      title: 'Nivel de conocimiento?',
      input: 'range',
      inputLabel: 'porcentaje de conocimiento',
      inputAttributes: {
        min: "0",
        max: "100",
        step: "5"
      },
      inputValue: 25
    }).then((result) => {
      if (result.value==null || result.value==0) {
        this.habilidad.conocimiento = "0";
      } else {
      this.habilidad.conocimiento = result.value;
      }
    }
    )

  }

 

}
