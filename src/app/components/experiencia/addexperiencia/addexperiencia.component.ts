import { ExperienciaLaboral } from 'src/app/Modelo/ExperienciaLaboral';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperiencialaboralService } from 'src/app/Service/experiencialaboral.service';

@Component({
  selector: 'app-addexperiencia',
  templateUrl: './addexperiencia.component.html',
  styleUrls: ['./addexperiencia.component.css']
})
export class AddexperienciaComponent implements OnInit {

  expLab:ExperienciaLaboral = new ExperienciaLaboral();
  
  constructor(private router:Router, private serviceExplaboral:ExperiencialaboralService) { }

  ngOnInit(): void {
    this.expLab.img_logo= "../../../../assets/imagenes/imagen camara.png";
  }

  Guardar(){
    this.serviceExplaboral.createExpLaboral(this.expLab)
    .subscribe(data=>{
      alert("se agrego con exito");
      this.router.navigate(["Home"]);
    })
  }

  Cancelar(){
    this.expLab = null;
    this.router.navigate(["Home"]);
  }


}
