import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  url: "http://localhost:3000/api/auth/login";
  currentUserSubject = new BehaviorSubject<any>({});

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
  }

  iniciarSesion(usuario: any): Observable<any> {
    return this.http.post(this.url, usuario).pipe(map(data => {
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      return data;
    }))
  }


}
