import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPersonal } from 'src/app/Modelo/InfoPersonal';
import { InfopersonalService } from 'src/app/Service/infopersonal.service';


@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {

  infoPersonal: InfoPersonal;
  usuario: string;
  visible: boolean;

  constructor(private router:Router, private infopersoService: InfopersonalService) { }

  ngOnInit(): void {
    this.infopersoService.getInfoPersonalId(1)
    .subscribe(data => { this.infoPersonal = data; })

    this.usuario = localStorage.getItem("user");

      if (this.usuario == "admin") {
        this.visible = true;
      } else {
        this.visible = false;
      }



  }

  Editar(objInfoPersonal:InfoPersonal):void{
    localStorage.setItem("id_infopersonal",objInfoPersonal.id_infoPersonal.toString());
    this.router.navigate(["infopersonal"]);
  }

}
