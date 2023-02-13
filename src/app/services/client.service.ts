import { Client } from './../models/client';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  apiUrl = "http://localhost:8080";

  constructor(public httpClient: HttpClient) { }

  updateClientToDebiteur(client: Client){
    return this.httpClient.post<Client>(this.apiUrl + "/transformerClientDebiteur", client);
  }

  getTousClientsNonDebiteur(){
    return this.httpClient.get<Client[]>(this.apiUrl + "/getAllClientNonDebiteur")
  }

  getClientById(id: number){
    return this.httpClient.get<Client>(this.apiUrl + "/getClient/" + id)
  }

}
