import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidades } from '../Modelo/Habilidades';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  
  //ruta del backend
  Url= environment.tpUrl+"habilidades";
  //Url='http://localhost:8080/habilidades';//ruta del proyecto backend en Java
  
  constructor(private http:HttpClient) { }
   
   getlistaHabilidades(){
     return this.http.get<Habilidades[]>(this.Url+"/listado");
   }
 
   /* getlistaHabilidades(){
     return this.http.get<Habilidades[]>("./assets/mock_data/data_habilidades.json");
   } */
   
   createHabilidad(objHabilidad: Habilidades): Observable<Habilidades> {
     return this.http.post<Habilidades>(`${this.Url}/new`, objHabilidad);
   }
 
   updateHabilidad(objHabilidad: Habilidades): Observable<Habilidades> {
     return this.http.put<Habilidades>(`${this.Url}/update/${objHabilidad.id_habilidad}`, objHabilidad);
   }
   
   deleteHabilidad(objHabilidad: Habilidades): Observable<Habilidades> {
     return this.http.delete<Habilidades>(`${this.Url}/delete/${objHabilidad.id_habilidad}`);
   }
 
   getHabilidadPorId(id: number): Observable<Habilidades> {
     return this.http.get<Habilidades>(`${this.Url}/${id}`);
   }



}
