import { Observable } from 'rxjs';
import { Utilisateur } from './../models/utilisateur';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  apiUrl = "http://localhost:8080";

  constructor(public HttpClient: HttpClient) { }

  verifierUser(utilisateur: Utilisateur): Observable<any> {
    return this.HttpClient.post<Utilisateur>(this.apiUrl + "/verifyUser", utilisateur);
  }
}
