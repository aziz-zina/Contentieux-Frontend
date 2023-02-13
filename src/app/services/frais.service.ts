import { Observable } from 'rxjs';
import { Risque } from './../models/risque';
import { Frais } from './../models/frais';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FraisService {

  apiUrl = "http://localhost:8080";

  constructor(public HttpClient: HttpClient) { }

  getTousFraisEnAttente() : Observable<Frais[]>{
    return this.HttpClient.get<Frais[]>(this.apiUrl + "/getAllFraisEnAttente");
  }

  addFrais(frais: Frais): Observable<Frais>{
    return this.HttpClient.post<Frais>(this.apiUrl + "/addFrais", frais);
  }

  getAllFraisByRisque(risque: Risque): Observable<Frais[]>{
    return this.HttpClient.post<Frais[]>(this.apiUrl + "/getAllFraisByRisque", risque );
  }

  updateFraisValide(frais: Frais): Observable<Frais>{
    return this.HttpClient.post<Frais>(this.apiUrl + "/updateFraisValide", frais);
  }

  updateFraisRefuse(frais: Frais): Observable<Frais>{
    return this.HttpClient.post<Frais>(this.apiUrl + "/updateFraisRefuse", frais);
  }
}
