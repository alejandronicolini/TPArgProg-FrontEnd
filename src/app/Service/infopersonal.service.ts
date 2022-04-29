import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InfoPersonal } from '../Modelo/InfoPersonal';

@Injectable({
  providedIn: 'root'
})
export class InfopersonalService {
  
  //ruta del backend
  Url= environment.tpUrl+"info_personal";
  //Url = 'http://localhost:8080/info_personal';//ruta del proyecto backend en Java
  
  constructor(private http: HttpClient) { }
 
   getInfoPersonalId(id: number): Observable<InfoPersonal> {
    return this.http.get<InfoPersonal>(`${this.Url}/${id}`);
  } 

  /* getInfoPersonalId() {
    return this.http.get<InfoPersonal>("./assets/mock_data/data_infoPersonal.json");
  }  */
  

  updateInfoPersonal(objInfoPersonal: InfoPersonal): Observable<InfoPersonal> {
    return this.http.put<InfoPersonal>(`${this.Url}/update/${objInfoPersonal.id_infoPersonal}`, objInfoPersonal)
  }

//faltaria implementar el metodo delete y el metodo create


}
