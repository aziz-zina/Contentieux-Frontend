import { Debiteur } from './../models/debiteur';
import { Risque } from './../models/risque';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RisqueService {

  apiUrl = "http://localhost:8080";

  constructor(public HttpClient: HttpClient) { }

  addRisque(risque: Risque){
    return this.HttpClient.post<Risque>(this.apiUrl + "/addRisque", risque);
  }

  getRisque(risque: Risque){
    return this.HttpClient.get<Risque>(this.apiUrl + "/getRisqueById/" + risque.numRisque);
  }
}
