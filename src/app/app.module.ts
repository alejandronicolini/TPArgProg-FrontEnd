import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

//Service
import { PersonaService } from './Service/persona.service';
import { EducacionService } from './Service/educacion.service';
import { ProyectoService } from './Service/proyecto.service';
import { HabilidadService } from './Service/habilidad.service';
import { ExperiencialaboralService } from './Service/experiencialaboral.service';
import { InfopersonalService } from './Service/infopersonal.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { AddeducacionComponent } from './components/educacion/addeducacion/addeducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion/editeducacion.component';
import { ListareducacionComponent } from './components/educacion/listareducacion/listareducacion.component';
import { AddproyectoComponent } from './components/proyectos/addproyecto/addproyecto.component';
import { EditproyectoComponent } from './components/proyectos/editproyecto/editproyecto.component';
import { ListarproyectoComponent } from './components/proyectos/listarproyecto/listarproyecto.component';
import { AddhabilidadComponent } from './components/habilidades/addhabilidad/addhabilidad.component';
import { EdithabilidadComponent } from './components/habilidades/edithabilidad/edithabilidad.component';
import { ListarhabilidadComponent } from './components/habilidades/listarhabilidad/listarhabilidad.component';
import { AddexperienciaComponent } from './components/experiencia/addexperiencia/addexperiencia.component';
import { EditexperienciaComponent } from './components/experiencia/editexperiencia/editexperiencia.component';
import { ListarexperienciaComponent } from './components/experiencia/listarexperiencia/listarexperiencia.component';
import { EditpersonaComponent } from './components/persona/editpersona/editpersona.component';
import { InfopersonalComponent } from './components/persona/infopersonal/infopersonal.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { UsuariologinComponent } from './authentication/usuariologin.component';
import { RegistroComponent } from './authentication/registro.component';
import { interceptorProvider } from './interceptors/educ-interceptor.service';
import { FooterComponent } from './components/footer/footer.component';
import { CoverComponent } from './components/cover/cover.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    AcercadeComponent,
    CabeceraComponent,
    AddeducacionComponent,
    EditeducacionComponent,
    ListareducacionComponent,
    AddproyectoComponent,
    EditproyectoComponent,
    ListarproyectoComponent,
    AddhabilidadComponent,
    EdithabilidadComponent,
    ListarhabilidadComponent,
    AddexperienciaComponent,
    EditexperienciaComponent,
    ListarexperienciaComponent,
    EditpersonaComponent,
    InfopersonalComponent,
    UsuariologinComponent,
    RegistroComponent,
    FooterComponent,
    CoverComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DragDropModule,
  ],
  providers: [PersonaService, EducacionService, ProyectoService, HabilidadService, ExperiencialaboralService, InfopersonalService, interceptorProvider],
  bootstrap: [AppComponent]

})
export class AppModule { }
