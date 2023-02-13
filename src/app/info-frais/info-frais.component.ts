import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Debiteur } from './../models/debiteur';
import { Frais } from './../models/frais';
import { Risque } from './../models/risque';
import { FraisService } from './../services/frais.service';

@Component({
  selector: 'app-info-frais',
  templateUrl: './info-frais.component.html',
  styleUrls: ['./info-frais.component.css'],
  providers: [DialogService, MessageService]
})
export class InfoFraisComponent {

  dateFrais: Date;
  montant: number;
  numPiece: number;
  cin: number;
  ctx: Debiteur;
  risque: Risque;
  Types: string[] = ["Enregistrement", "Timbrage", "Prestataire de service"];
  selectedType: string;
  test: boolean = false;

  constructor(private fs: FraisService, public ref: DynamicDialogRef, public config: DynamicDialogConfig, private messageService: MessageService, public dialogService: DialogService) { }

  showError() {
    this.messageService.add({ key: 'msg', severity: 'error', summary: 'Erreur', detail: 'Opération échouée' });
  }

  showSuccess() {
    this.messageService.add({ key: 'msg', severity: 'success', summary: 'Succès', detail: 'Opération effectuée' });
  }

  showWarn() {
    this.messageService.add({ key: 'msg', severity: 'warn', summary: 'Warn', detail: 'Il faut remplir tous les champs!' });
  }

  addFrais(f: NgForm) {
    let frais: Frais;
    if (this.selectedType == undefined || this.dateFrais == null || this.montant == 0) {
      this.showWarn();
    } else if (this.selectedType !== undefined && this.dateFrais !== null && this.montant !== 0) {
      if (this.selectedType == "Enregistrement" && this.numPiece == 0) {
        this.showWarn();
      } else if (this.selectedType == "Prestataire de service" && this.cin == 0) {
        this.showWarn();
      }
      else {
        frais = new Frais(this.selectedType, this.montant, this.dateFrais, "En attente", this.cin, this.numPiece, this.risque);
        this.fs.addFrais(frais).subscribe(
          (data) => { this.test = true, this.close(frais) },
          (error) => { this.showError() }
        );
        if (this.test == true) {
          this.showSuccess()
        }
      }
    }
    //console.log(this.cin);
  }

  close(frais: Frais) {
    this.ref.close(frais);
  }

  ngOnInit(): void {
    this.ctx = this.config.data["ctx"];
    this.risque = this.config.data["risque"]
  }

}
