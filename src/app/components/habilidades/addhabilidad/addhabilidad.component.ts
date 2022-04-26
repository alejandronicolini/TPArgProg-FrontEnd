import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/Modelo/Habilidades';
import { HabilidadService } from 'src/app/Service/habilidad.service';

@Component({
  selector: 'app-addhabilidad',
  templateUrl: './addhabilidad.component.html',
  styleUrls: ['./addhabilidad.component.css']
})
export class AddhabilidadComponent implements OnInit {

  habilidad:Habilidades = new Habilidades();
  
  constructor(private router:Router, private serviceHabilidad:HabilidadService) { }

  ngOnInit(): void {
    this.habilidad.img_logo= "../../../../assets/imagenes/imagen camara.png";
  }

  Guardar(){
    this.serviceHabilidad.createHabilidad(this.habilidad)
    .subscribe(data=>{
      alert("se agrego con exito");
      this.router.navigate(["Home"]);
    })
  }

  Cancelar(){
    this.habilidad = null;
    this.router.navigate(["Home"]);
  }

}
