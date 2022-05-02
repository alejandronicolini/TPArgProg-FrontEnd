import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../Modelo/Proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  //ruta del backend
  Url= environment.tpUrl+"proyectos";
  //Url='http://localhost:8080/proyectos';
  
  constructor(private http:HttpClient) { }
  
  getlistaProyectos(){
    return this.http.get<Proyectos[]>(this.Url+"/listado");
  }

  /* getlistaProyectos(){
    return this.http.get<Proyectos[]>("./assets/mock_data/data_proyectos.json");
  } */
  
  createProyecto(objProyecto: Proyectos): Observable<Proyectos> {
    return this.http.post<Proyectos>(`${this.Url}/new`, objProyecto);
  }

  updateProyecto(objProyecto: Proyectos): Observable<Proyectos> {
    return this.http.put<Proyectos>(`${this.Url}/update/${objProyecto.id_proyecto}`, objProyecto);
  }
  
  deleteProyecto(objProyecto: Proyectos): Observable<Proyectos> {
    return this.http.delete<Proyectos>(`${this.Url}/delete/${objProyecto.id_proyecto}`);
  }

  getProyectoPorId(id: number): Observable<Proyectos> {
    return this.http.get<Proyectos>(this.Url + "/" + id);
  }


}
