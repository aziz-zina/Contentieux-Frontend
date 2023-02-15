import { Router } from '@angular/router';
import { SharedServiceService } from './../services/shared-service.service';
import { Observable } from 'rxjs';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FraisService } from './../services/frais.service';
import { Frais } from './../models/frais';
import { Component } from '@angular/core';
import { UpdateFraisComponent } from '../update-frais/update-frais.component';

@Component({
  selector: 'app-liste-frais',
  templateUrl: './liste-frais.component.html',
  styleUrls: ['./liste-frais.component.css'],
  providers: [DialogService, MessageService]
})
export class ListeFraisComponent {

  tabFrais: Frais[] = [];
  selectedFrais: Frais;
  activeUser: Observable<any>;
  first = 0;
  rows = this.tabFrais.length;

  constructor(private sharedService: SharedServiceService, private fs: FraisService, private messageService: MessageService, public dialogService: DialogService, private router: Router) { }

  showError() {
    this.messageService.add({ key: 'msg', severity: 'error', summary: 'Erreur', detail: 'Opération échouée' });
  }

  showSuccess() {
    this.messageService.add({ key: 'msg', severity: 'success', summary: 'Succès', detail: 'Etat du frais à été changé.' });
  }

  getTousFrais(){
    this.fs.getTousFraisEnAttente().subscribe(
      (data) => this.tabFrais = data
    )
  }

  show() {
    const ref = this.dialogService.open(UpdateFraisComponent, {
      header: "Modifier l'état du frais n° " + this.selectedFrais.numFrais,
      width: '80%',
      contentStyle: { "max-height": "550px", "overflow": "auto" },
      baseZIndex: 10000,
      data: {
        selectedFrais: this.selectedFrais
      },
    });

    ref.onClose.subscribe((frais: Frais) => {
      if(frais){
        this.showSuccess();
        //this.getTousFrais();
      }
    })
  }

  ngOnInit(): void {
    this.activeUser = this.sharedService.user;
    this.activeUser.subscribe(user => {
      if (!user) {
        this.router.navigate(['./'])
      }
    });
    this.getTousFrais();
  }
}
