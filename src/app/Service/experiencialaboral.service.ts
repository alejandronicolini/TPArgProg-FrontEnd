import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExperienciaLaboral } from '../Modelo/ExperienciaLaboral';

@Injectable({
  providedIn: 'root'
})

export class ExperiencialaboralService {

  constructor(private http:HttpClient) { }
  
  Url='http://localhost:8080/exp_laboral';//ruta del proyecto backend en Java
  
  
  getlistaExpLaboral(){
    return this.http.get<ExperienciaLaboral[]>(this.Url+"/listado");
  }

  /* getlistaExpLaboral(){
    return this.http.get<ExperienciaLaboral[]>("./assets/mock_data/data_expLaboral.json");
  } */
  
  createExpLaboral(objExpLaboral: ExperienciaLaboral): Observable<ExperienciaLaboral> {
    return this.http.post<ExperienciaLaboral>(`${this.Url}/new`, objExpLaboral);
  }

  updateExpLaboral(objExpLaboral: ExperienciaLaboral): Observable<ExperienciaLaboral> {
    return this.http.put<ExperienciaLaboral>(`${this.Url}/update/${objExpLaboral.id_expLaboral}`, objExpLaboral);
  }
  
  deleteExpLaboral(objExpLaboral: ExperienciaLaboral): Observable<ExperienciaLaboral> {
    return this.http.delete<ExperienciaLaboral>(`${this.Url}/delete/${objExpLaboral.id_expLaboral}`);
  }

  getExpLaboralPorId(id: number): Observable<ExperienciaLaboral> {
    return this.http.get<ExperienciaLaboral>(this.Url + "/" + id);
  }


}
