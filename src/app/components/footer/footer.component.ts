import { Component, OnInit } from '@angular/core';
import { InfoPersonal } from 'src/app/Modelo/InfoPersonal';
import { InfopersonalService } from 'src/app/Service/infopersonal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  infoPersonal: InfoPersonal;

  constructor(private infoPersonalService: InfopersonalService) { }

  ngOnInit(): void {
    
    this.infoPersonalService.getInfoPersonalId(1).
      subscribe(data => {
        this.infoPersonal = data;
      })

  }

  
  mostrarModal(){
    Swal.fire({
      title: '<strong> Whats App</strong>',
      icon: 'info',
      html:
        '<p>' + this.infoPersonal.telefono + '</p>' ,
      
      focusConfirm: false,
      confirmButtonColor: '#3085d6',
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> OK!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      
    })


  }

}
