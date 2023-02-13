import { Utilisateur } from './../models/utilisateur';
import { MessageService } from 'primeng/api';
import { UtilisateurService } from './../services/utilisateur.service';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { SharedServiceService } from '../services/shared-service.service';
import { empty, isEmpty } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent {

  errorMessage: string;

  constructor(private us: UtilisateurService, private messageService: MessageService, private router: Router, private sharedService: SharedServiceService) { }

  showError() {
    this.messageService.add({ key: 'msg', severity: 'error', summary: 'Erreur', detail: "Login/Mot de passe incorrect." });
  }

  showWarn() {
    this.messageService.add({ key: 'msg', severity: 'warn', summary: 'Warn', detail: 'Il faut remplir tous les champs!' });
  }

  login(f: NgForm) {
    let login = f.value["login"];
    let psw = f.value["password"];
    if(login == "" || psw == "") {
      this.showWarn();
    } else {
      let user = new Utilisateur(psw, "", "", "", login);
      //console.log(user);
      this.us.verifierUser(user).subscribe(
        (data) => {
          this.router.navigate(['./home']),
            this.sharedService.setUser(data),
            console.log(this.sharedService.user)
        },
        (error) => {
          this.showError();
        }
      )
    }
  }
}
