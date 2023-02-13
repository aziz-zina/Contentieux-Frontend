import { Router } from '@angular/router';
import { SharedServiceService } from './../services/shared-service.service';
import { Observable } from 'rxjs';
import { Debiteur } from './../models/debiteur';
import { RisqueService } from './../services/risque.service';
import { DebiteurService } from './../services/debiteur.service';
import { Risque } from './../models/risque';
import { Credit } from './../models/credit';
import { Client } from './../models/client';
import { Component } from '@angular/core';
import { ClientService } from '../services/client.service';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-chercher-client',
  templateUrl: './chercher-client.component.html',
  styleUrls: ['./chercher-client.component.css'],
  providers: [MessageService]
})
export class ChercherClientComponent {

  //Declaration des variables
  tabCredits: Credit[] = [];
  client = new Client("", "", "", []);
  tabRisque: Risque[] = [];
  etat = false;
  activeUser: Observable<any>
  first = 0;
  rows = this.tabRisque.length;

  constructor(private cs: ClientService, private ds: DebiteurService, private rs: RisqueService, private messageService: MessageService, private sharedService: SharedServiceService, private router: Router) { }

  clientNonExistant() {
    this.messageService.add({ key: 'nonExistant', severity: 'error', summary: 'Erreur', detail: "Ce client n'existe pas" });
  }

  debiteurExisteError() {
    this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Ce client est déjà débiteur' });
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Erreur', detail: "Une erreur s'est produite" });
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Succès', detail: 'Opération effectuée' });
  }

  chercher(f: NgForm) {
    let id = f.value["id"];
    this.cs.getClientById(id)
      .subscribe(
        (data) => { this.client = data, this.etat = true, this.tabCredits = data.lesCredit },
        (error) => { this.clientNonExistant(); }
      );
    console.log(this.etat);
  }

  ajouter(): boolean {
    let test = false;
    if (this.client.etatClient == "Debiteur") {
      test = false;
      this.debiteurExisteError();
    } else {
      this.cs.updateClientToDebiteur(this.client).subscribe(
        data => { this.showSuccess() },
        error => { this.showError() }
      )
    }
    return test;
  }

  ngOnInit(): void {
    this.activeUser = this.sharedService.user;
    this.activeUser.subscribe(user => {
      if (!user) {
        this.router.navigate(['./'])
      }
    });
  }
}
