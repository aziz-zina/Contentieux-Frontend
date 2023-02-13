import { Router } from '@angular/router';
import { Utilisateur } from './../models/utilisateur';
import { Observable } from 'rxjs';
import { SharedServiceService } from './../services/shared-service.service';
import { MenuItem } from 'primeng/api';
import { Component } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  items: MenuItem[] = [];
  activeItem: MenuItem;
  activeUser: Observable<any>;

  constructor(private sharedService: SharedServiceService, private router: Router) { }

  logout(){
    this.router.navigate(['./']);
    this.sharedService.logout();
  }

  ngOnInit() {
    this.activeUser = this.sharedService.user;
    console.log(this.activeUser);
    this.items = [
      { label: 'Accueil', icon: 'pi pi-fw pi-home', routerLink: './home' },
      {
        label: 'Consultation', icon: 'pi pi-fw pi-users', items: [{
          label: 'Par numéro',
          icon: 'pi pi-fw pi-search',
          items: [
            { label: 'Debiteur', routerLink: './consulterDebiteur' },
            { label: 'Client', routerLink: './chercherClient' },
          ]
        },
        { label: 'Les Clients', routerLink: './afficherTousClients' },
        { label: 'Les Débiteurs', routerLink: './afficherTousDebiteur' }
        ]
      },
      {
        label: 'Frais', icon: 'pi pi-fw pi-folder', items: [
          { label: 'Consulter Frais', routerLink: './consulterFrais' },
          { label: 'Les Fais en attente', routerLink: './listFrais' }
        ]
      },
      { label: '', icon: '', routerLink: './', disabled: true }
    ];

    this.activeItem = this.items[3];
  }
}
