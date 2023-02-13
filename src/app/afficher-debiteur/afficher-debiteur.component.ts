import { Router } from '@angular/router';
import { SharedServiceService } from './../services/shared-service.service';
import { Observable } from 'rxjs';
import { DebiteurService } from './../services/debiteur.service';
import { Debiteur } from './../models/debiteur';
import { Component } from '@angular/core';

@Component({
  selector: 'app-afficher-debiteur',
  templateUrl: './afficher-debiteur.component.html',
  styleUrls: ['./afficher-debiteur.component.css']
})
export class AfficherDebiteurComponent {

  activeUser: Observable<any>
  lesCtx: Debiteur[] = [];
  first = 0;
  rows = this.lesCtx.length;

  constructor(public ds: DebiteurService, private sharedService: SharedServiceService, private router: Router) { }

  ngOnInit(): void {
    this.activeUser = this.sharedService.user;
    this.activeUser.subscribe(user => {
      if (!user) {
        this.router.navigate(['./'])
      }
    });
    this.ds.getTousDebiteurs().subscribe(data => this.lesCtx = data)
  }
}
