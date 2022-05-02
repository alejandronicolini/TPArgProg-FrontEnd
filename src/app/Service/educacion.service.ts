import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../Modelo/Educacion';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  //ruta del backend
  Url= environment.tpUrl+"educacion";//ruta del proyecto backend en Java
  //Url='http://localhost:8080/educacion';
  
  //definimos en el constructor el HttpClient para conectarnos al backend por REST(web service)
  constructor(private http:HttpClient) { }
  
  
  // metodo para obtener datos de las personas del backend
  
  getlistaEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.Url+"/listado");
  }

  /* getlistaEducacion(){
    return this.http.get<Educacion[]>("./assets/mock_data/data_educacion.json");
  } */
  
  createEducacion(educacion: Educacion): Observable<Educacion> {
    return this.http.post<Educacion>(`${this.Url}/new`, educacion);
  }

  updateEducacion(objEducacion: Educacion): Observable<Educacion> {
    return this.http.put<Educacion>(`${this.Url}/update/${objEducacion.id_educacion}`, objEducacion);
  }
  
  deleteEducacion(objEduc: Educacion): Observable<Educacion> {
    return this.http.delete<Educacion>(`${this.Url}/delete/${objEduc.id_educacion}`);
  }

  getEducacionPorId(id: number): Observable<Educacion> {
    return this.http.get<Educacion>(`${this.Url}/${id}`);
  }




}
