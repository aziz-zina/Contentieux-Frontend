import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { UpdateFraisComponent } from './update-frais/update-frais.component';
import { ListeFraisComponent } from './liste-frais/liste-frais.component';
import { ConsulterFraisComponent } from './consulter-frais/consulter-frais.component';
import { InfoComponent } from './info/info.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { HomeComponent } from './home/home.component';
import { ConsulterDebiteurComponent } from './consulter-debiteur/consulter-debiteur.component';
import { ChercherClientComponent } from './chercher-client/chercher-client.component';
import { AfficherClientComponent } from './afficher-client/afficher-client.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficherDebiteurComponent } from './afficher-debiteur/afficher-debiteur.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'afficherTousClients', component: AfficherClientComponent },
  { path: 'chercherClient', component: ChercherClientComponent },
  { path: 'consulterDebiteur', component: ConsulterDebiteurComponent },
  { path: 'afficherTousDebiteur', component: AfficherDebiteurComponent },
  { path: 'consulterFrais', component: ConsulterFraisComponent },
  { path: 'listFrais', component: ListeFraisComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
