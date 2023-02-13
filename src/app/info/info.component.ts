import { FraisService } from './../services/frais.service';
import { Frais } from './../models/frais';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DebiteurService } from './../services/debiteur.service';
import { Risque } from './../models/risque';
import { Debiteur } from './../models/debiteur';
import { Component } from '@angular/core';
import { style } from '@angular/animations';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {

  ctx: Debiteur;
  risque: Risque;
  tabFrais: Frais[] = [];
  first = 0;
  rows = this.tabFrais.length;

  constructor(private fs: FraisService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit(): void {
    this.ctx = this.config.data["ctx"];
    this.risque = this.config.data["risque"];
    this.fs.getAllFraisByRisque(this.risque).subscribe(
      (data) => this.tabFrais = data
    )
  }

}
