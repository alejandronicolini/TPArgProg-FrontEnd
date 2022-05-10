import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/Modelo/Habilidades';
import { HabilidadService } from 'src/app/Service/habilidad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edithabilidad',
  templateUrl: './edithabilidad.component.html',
  styleUrls: ['./edithabilidad.component.css']
})
export class EdithabilidadComponent implements OnInit {

  habilidad:Habilidades = new Habilidades();
  
  constructor(private router:Router, private servicehab:HabilidadService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id_habilidad");
    let idNumber= Number(id);
    this.servicehab.getHabilidadPorId(idNumber).subscribe(data=>{this.habilidad=data})
  }

  Actualizar(objHabilidad:Habilidades){
    this.servicehab.updateHabilidad(objHabilidad)
    .subscribe(data=>{
      this.habilidad=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["Home"]);
    })
  }

  Cancelar(){
    this.habilidad = null;
    this.router.navigate(["Home"]);
  }

  Rango(){
    Swal.fire({
      title: 'Nivel de conocimiento?',
      input: 'range',
      inputLabel: 'porcentaje de conocimiento',
      inputAttributes: {
        min: "0",
        max: "100",
        step: "5"
      },
      inputValue: this.habilidad.conocimiento
    }).then((result) => {
      if (result.value==null) {
        this.habilidad.conocimiento = this.habilidad.conocimiento;
      } else {
      this.habilidad.conocimiento = result.value;
      }
    })
  }


}
