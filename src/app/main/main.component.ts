import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  /* usuario: string;
  visible: boolean; */
  
  constructor() { }

  ngOnInit(): void {
    /* this.usuario = localStorage.getItem("user");

      if (this.usuario == "admin") {
        this.visible = true;
      } else {
        this.visible = false;
      } */

    /* if (this.usuario==null || this.usuario=="invitado" || this.usuario=="") {
      this.invitado = true;
    } */

  }


}
