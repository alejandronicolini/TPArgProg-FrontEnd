import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Proyectos } from 'src/app/Modelo/Proyectos';
import { ProyectoService } from 'src/app/Service/proyecto.service';

@Component({
  selector: 'app-addproyecto',
  templateUrl: './addproyecto.component.html',
  styleUrls: ['./addproyecto.component.css']
})
export class AddproyectoComponent implements OnInit {

  proyecto:Proyectos = new Proyectos();
  
  constructor(private serviceProy:ProyectoService, private router:Router, private route:ActivatedRoute ) {}

  ngOnInit(): void {
  }

  Guardar(){
    this.serviceProy.createProyecto(this.proyecto)
    .subscribe(data=>{
      alert("se agrego con exito");
      this.router.navigate(["Home"]);
    })
  }

  Cancelar(){
    this.proyecto = null;
    this.router.navigate(['../proyectos'], {relativeTo: this.route});
    //this.viewportScroller.scrollToAnchor('/Home#ale');

    //window.location.reload();
    //this.router.navigate(['/Home'], { fragment: 'ale' });

    /*  this.router.navigate(["Home"]); */
  }

}
