import { SharedServiceService } from './../services/shared-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Frais } from './../models/frais';
import { FraisService } from './../services/frais.service';
import { ConsultationComponent } from './../consultation/consultation.component';
import { InfoComponent } from './../info/info.component';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DebiteurService } from './../services/debiteur.service';
import { Debiteur } from './../models/debiteur';
import { Risque } from './../models/risque';
import { Component } from '@angular/core';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-consulter-debiteur',
  templateUrl: './consulter-debiteur.component.html',
  styleUrls: ['./consulter-debiteur.component.css'],
  providers: [DialogService, MessageService]
})
export class ConsulterDebiteurComponent {
  activeUser: Observable<any>

  constructor(private router: Router, private sharedService: SharedServiceService) { }

  ngOnInit(): void {
    this.activeUser = this.sharedService.user;
    this.activeUser.subscribe(user => {
      if (!user) {
        this.router.navigate(['./'])
      }
    });

  }
}
