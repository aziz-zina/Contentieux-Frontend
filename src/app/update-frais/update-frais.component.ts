import { Router } from '@angular/router';
import { SharedServiceService } from './../services/shared-service.service';
import { Observable } from 'rxjs';
import { Debiteur } from './../models/debiteur';
import { DebiteurService } from './../services/debiteur.service';
import { RisqueService } from './../services/risque.service';
import { Risque } from './../models/risque';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { FraisService } from './../services/frais.service';
import { Frais } from './../models/frais';
import { Component } from '@angular/core';

@Component({
  selector: 'app-update-frais',
  templateUrl: './update-frais.component.html',
  styleUrls: ['./update-frais.component.css'],
  providers: [MessageService]
})
export class UpdateFraisComponent {

  selectedFrais: Frais;
  ris: Risque;
  ctx: Debiteur;
  activeUser: Observable<any>;
  test: boolean;

  constructor(private sharedService: SharedServiceService, private router: Router, private rs: RisqueService, private fs: FraisService, public ref: DynamicDialogRef, public config: DynamicDialogConfig, public messageService: MessageService) { }

  showError() {
    this.messageService.add({ key: 'accessDenied', severity: 'error', summary: 'Erreur', detail: "Vous n'avez pas accès" });
  }

  close(frais: Frais) {
    this.ref.close(frais);
  }

  reloadPage() {
    setTimeout(() => {
      location.reload();
    }, 600);
  }

  valider() {
    if (this.test == true) {
      this.fs.updateFraisValide(this.selectedFrais).subscribe();
      this.close(this.selectedFrais);
      //this.reloadPage();
    } else {
      this.showError()
    }
  }

  refuser() {
    if (this.test == true) {
      this.fs.updateFraisRefuse(this.selectedFrais).subscribe();
      this.close(this.selectedFrais);
      //this.reloadPage();
    } else {
      this.showError()
    }
  }

  ngOnInit(): void {
    this.activeUser = this.sharedService.user;
    this.activeUser.subscribe(user => {
      console.log(user.grade);
      if (user.grade !== "Directeur") {
        this.test = false;
      } else {
        this.test = true;
      }
    });
    this.selectedFrais = this.config.data["selectedFrais"];
    this.rs.getRisque(this.selectedFrais.risque).subscribe(
      data => this.ris = data
    )
  }
}
