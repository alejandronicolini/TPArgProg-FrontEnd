import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Scroll, Router } from '@angular/router';
import { filter } from 'rxjs';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  /* usuario: string;
  visible: boolean; */
  
  constructor(private router: Router, private viewportScroller: ViewportScroller ) { 
    this.router.events.pipe(filter(e => e instanceof Scroll)).subscribe((e: any) => {
      console.log(e);

      // this is fix for dynamic generated(loaded..?) content
      setTimeout(() => {
        if (e.anchor) {
          this.viewportScroller.scrollToAnchor(e.anchor);
        } else {
          this.viewportScroller.scrollToPosition([0, 0]);
        }
      });
    });
  }
  

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
