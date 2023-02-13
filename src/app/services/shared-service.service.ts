import { Utilisateur } from './../models/utilisateur';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  private userSubject = new BehaviorSubject<any>(null);

  user = this.userSubject.asObservable();

  setUser(user: Utilisateur) {
    this.userSubject.next(user);
  }

  logout() {
    this.userSubject.next(null);
  }
}
