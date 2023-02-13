import { Observable } from 'rxjs';
import { SharedServiceService } from './services/shared-service.service';
import { Utilisateur } from './models/utilisateur';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';
  activeUser: Observable<any>;

  constructor(private sharedService: SharedServiceService) { }

  ngOnInit(): void {
    this.activeUser = this.sharedService.user;
  }
}
