import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddeducacionComponent } from './components/educacion/addeducacion/addeducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion/editeducacion.component';
import { AddexperienciaComponent } from './components/experiencia/addexperiencia/addexperiencia.component';
import { EditexperienciaComponent } from './components/experiencia/editexperiencia/editexperiencia.component';
import { AddhabilidadComponent } from './components/habilidades/addhabilidad/addhabilidad.component';
import { EdithabilidadComponent } from './components/habilidades/edithabilidad/edithabilidad.component';
import { AddproyectoComponent } from './components/proyectos/addproyecto/addproyecto.component';
import { EditproyectoComponent } from './components/proyectos/editproyecto/editproyecto.component';
import { EditpersonaComponent } from './components/persona/editpersona/editpersona.component';
import { InfopersonalComponent } from './components/persona/infopersonal/infopersonal.component';
import { MainComponent } from './main/main.component';
import { UsuariologinComponent } from './authentication/usuariologin.component';
//import { RegistroComponent } from './authentication/registro.component';
import { AuthGuardService } from './guards/auth-guard.service';



//Guard habilida el acceso al componente segun una ondicion de autenticacion

const routes: Routes = [
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path: 'Home', component: MainComponent},
  
  {path:'add-educacion', component:AddeducacionComponent, canActivate: [AuthGuardService], data: { expectedRol: ['admin', 'user'] }}, 
  {path:'edit-educacion', component:EditeducacionComponent, canActivate: [AuthGuardService], data: { expectedRol: ['admin', 'user'] }},
  {path:'edit-persona', component: EditpersonaComponent, canActivate: [AuthGuardService], data: { expectedRol: ['admin', 'user'] }},
  {path:'add-proyecto', component:AddproyectoComponent, canActivate: [AuthGuardService], data: { expectedRol: ['admin', 'user'] }},
  {path:'edit-proyecto',component:EditproyectoComponent, canActivate: [AuthGuardService], data: { expectedRol: ['admin', 'user'] }},
  {path:'add-habilidad', component:AddhabilidadComponent, canActivate: [AuthGuardService], data: { expectedRol: ['admin', 'user'] }},
  {path:'edit-habilidad',component:EdithabilidadComponent, canActivate: [AuthGuardService], data: { expectedRol: ['admin', 'user'] }},
  {path:'add-explaboral', component:AddexperienciaComponent, canActivate: [AuthGuardService], data: { expectedRol: ['admin', 'user'] }},
  {path:'edit-explaboral',component:EditexperienciaComponent, canActivate: [AuthGuardService], data: { expectedRol: ['admin', 'user'] }},
  {path:'infopersonal', component:InfopersonalComponent, canActivate: [AuthGuardService], data: { expectedRol: ['admin', 'user'] }},
  

  {path: 'login', component: UsuariologinComponent},
  /* {path: 'registro', component: RegistroComponent}, */


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
