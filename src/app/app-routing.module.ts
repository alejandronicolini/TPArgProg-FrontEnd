import { GuardGuard } from './Service/guard.guard';
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
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './main/main.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';


//Guard habilida el acceso al componente segun una ondicion de autenticacion
const routes: Routes = [
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Home', component:MainComponent},
  {path:'add-educacion', component:AddeducacionComponent, canActivate:[GuardGuard]}, 
  {path:'edit-educacion', component:EditeducacionComponent, canActivate:[GuardGuard]},
  {path:'edit-persona', component: EditpersonaComponent, canActivate:[GuardGuard]},
  {path:'add-proyecto', component:AddproyectoComponent, canActivate:[GuardGuard]},
  {path:'edit-proyecto',component:EditproyectoComponent, canActivate:[GuardGuard]},
  {path:'add-habilidad', component:AddhabilidadComponent, canActivate:[GuardGuard]},
  {path:'edit-habilidad',component:EdithabilidadComponent, canActivate:[GuardGuard]},
  {path:'add-explaboral', component:AddexperienciaComponent, canActivate:[GuardGuard]},
  {path:'edit-explaboral',component:EditexperienciaComponent, canActivate:[GuardGuard]},
  {path:'infopersonal', component:InfopersonalComponent},
  {path:'login', component: LoginComponent},

  {path: 'iniciar-sesion', component: IniciarSesionComponent},


  /* {path: 'editar-educacion/:id', component: EditeducacionComponent}, */ //Si uso routerlink


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
