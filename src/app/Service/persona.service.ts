import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  
  //ruta del backend
  Url= environment.tpUrl+"personas";
  //Url = 'http://localhost:8080/personas';

  //definimos en el constructor el HttpClient para conectarnos al backend por REST(web service)
  constructor(private http: HttpClient) { }

  // metodo para obtener datos de las personas del backend
  getPersonas() {
    return this.http.get<Persona[]>(`${this.Url}/listado`);
  }

  createPersona(persona: Persona) {
    return this.http.post<Persona>(`${this.Url}/new`, persona);
  }

  updatePersona(persona: Persona) {
    return this.http.put<Persona>(`${this.Url}/update/${persona.id_persona}`, persona)
  }

  deletePersona(persona: Persona) {
    return this.http.delete<Persona>(`${this.Url}/delete/${persona.id_persona}`);
  }

  getPersonaId() {
    return this.http.get<Persona>(`${this.Url}/1`);
  }

  /* getPersonaId() {
    return this.http.get<Persona>("./assets/mock_data/data_persona.json");
  } */

  /* loginService(persona: Persona) {
    var httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.post<Persona>(`${this.Url}/login`, persona, httpOptions);
  } */

  //usado el inicio del Proyecto
  /* loginService(persona: Persona) {
    return this.http.post<Persona>(`${this.Url}/login`, persona);
  } */


}
