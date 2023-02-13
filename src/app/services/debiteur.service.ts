import { Risque } from './../models/risque';
import { Debiteur } from './../models/debiteur';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DebiteurService {

  apiUrl = "http://localhost:8080";

  constructor(public HttpClient: HttpClient) { }

  getTousDebiteurs(){
    return this.HttpClient.get<Debiteur[]>(this.apiUrl + "/getAllDebiteur")
  }

  getDebiteurById(id: number){
    return this.HttpClient.get<Debiteur>(this.apiUrl + "/getDebiteurCtxFromUrl/" + id)
  }

  addDebiteur(debiteur: Debiteur){
    return this.HttpClient.post<Debiteur>(this.apiUrl + "/addDebiteurCtx", debiteur);
  }

  getDebiteurByRisque(risque: Risque){
    return this.HttpClient.get<Debiteur>(this.apiUrl + "/getDebiteurByRisque/" + risque.numRisque);
  }
}
