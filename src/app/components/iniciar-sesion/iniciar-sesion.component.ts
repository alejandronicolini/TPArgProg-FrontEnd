import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/Service/autenticacion.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  form: FormGroup;

  constructor(private FormBuilder: FormBuilder, private autenticacionService: AutenticacionService, private router: Router) {

    this.form = this.FormBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        deviceInfo: this.FormBuilder.group({
          deviceId: [""],
          deviceType: [""],
          notificationToken: [""]
        })
      }
    )
  }

  ngOnInit(): void {
  }

  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }

  onEnviar(event: Event) {
    event.preventDefault();
    this.autenticacionService.iniciarSesion(this.form.value).
      subscribe(data => {
        console.log("Data:" + JSON.stringify(data));
        this.router.navigate(['Home']);
      })

  }


}
