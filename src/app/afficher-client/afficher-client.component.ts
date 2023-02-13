import { Router } from '@angular/router';
import { SharedServiceService } from './../services/shared-service.service';
import { Observable } from 'rxjs';
import { ClientService } from './../services/client.service';
import { Client } from './../models/client';
import { Component } from '@angular/core';

@Component({
  selector: 'app-afficher-client',
  templateUrl: './afficher-client.component.html',
  styleUrls: ['./afficher-client.component.css'],
})
export class AfficherClientComponent {

  activeUser: Observable<any>
  lesClients: Client[] = [];
  first = 0;
  rows = this.lesClients.length;

  constructor(public cs: ClientService, private sharedService: SharedServiceService, private router: Router) { }

  ngOnInit(): void {
    this.activeUser = this.sharedService.user;
    this.activeUser.subscribe(user => {
      if (!user) {
        this.router.navigate(['./'])
      }
    });
    this.cs.getTousClientsNonDebiteur().subscribe(client => this.lesClients = client);
  }
}
