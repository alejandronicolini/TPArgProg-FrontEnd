import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/Modelo/Educacion';
import { EducacionService } from 'src/app/Service/educacion.service';

@Component({
  selector: 'app-addeducacion',
  templateUrl: './addeducacion.component.html',
  styleUrls: ['./addeducacion.component.css']
})
export class AddeducacionComponent implements OnInit {

  educacion:Educacion = new Educacion();
  
  constructor(private router:Router, private serviceEduc:EducacionService) { }
  
  ngOnInit(): void {
    this.educacion.img_logo= "../../../../assets/imagenes/imagen camara.png";
  }

  Guardar(){
    this.serviceEduc.createEducacion(this.educacion)
    .subscribe(data=>{
      alert("se agrego con exito");
      this.router.navigate(["Home"]);
    })
  }

  Cancelar(){
    this.educacion = null;
    this.router.navigate(["Home"]);
  }


}
