import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../Modelo/Proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  //definimos en el constructor el HttpClient para conectarnos al backend por REST(web service)
  constructor(private http:HttpClient) { }
  
  //ruta del backend
  Url='http://localhost:8080/proyectos';//ruta del proyecto backend en Java
  
  // metodo para obtener datos de las personas del backend
  
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
