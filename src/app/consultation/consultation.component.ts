import { empty } from 'rxjs';
import { Frais } from './../models/frais';
import { InfoFraisComponent } from './../info-frais/info-frais.component';
import { InfoComponent } from './../info/info.component';
import { NgForm } from '@angular/forms';
import { DebiteurService } from './../services/debiteur.service';
import { Debiteur } from './../models/debiteur';
import { Risque } from './../models/risque';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Component, Input } from '@angular/core';
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css'],
  providers: [DialogService, MessageService]
})
export class ConsultationComponent {

  tabRisque: Risque[] = [];
  idCtx: number;
  tabFrais: Frais[] = [];
  ctx = new Debiteur("", 0, "", "", []);
  first = 0;
  rows = this.tabRisque.length;
  etat = false
  selectedRisque: Risque;
  ref: DynamicDialogRef;
  pathInfo: any;
  @Input() Info: number;

  constructor(private ds: DebiteurService, private messageService: MessageService, public dialogService: DialogService) { }

  DebiteurNonExistant() {
    this.messageService.add({ key: 'nonExistant', severity: 'error', summary: 'Erreur', detail: "Ce Débiteur n'existe pas" });
  }

  showSuccess() {
    this.messageService.add({ key: 'msg', severity: 'success', summary: 'Succès', detail: 'Opération effectuée' });
  }

  chercher(f: NgForm) {
    let id = f.value["id"];
    this.idCtx = id;
    this.ds.getDebiteurById(id)
      .subscribe(
        (data) => { this.ctx = data, this.tabRisque = this.ctx.lesRisques, this.etat = true },
        (error) => { this.DebiteurNonExistant() }
      )
  }

  show() {
    if (this.Info == 2) {
      this.pathInfo = InfoFraisComponent;
    } else {
      this.pathInfo = InfoComponent;
    }

    this.ref = this.dialogService.open(this.pathInfo, {
      header: 'Info',
      width: '70%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000,
      data: {
        ctx: this.ctx,
        risque: this.selectedRisque,
        ref: this.ref
      },
    });
    if (this.Info == 2) {
      this.ref.onClose.subscribe((frais: Frais) => {
        if (frais) {
          this.showSuccess();
        }
      })
    }
  }

  ngOnInit(): void { }

}
