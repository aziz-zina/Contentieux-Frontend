import { SharedServiceService } from './../services/shared-service.service';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulter-frais',
  templateUrl: './consulter-frais.component.html',
  styleUrls: ['./consulter-frais.component.css']
})
export class ConsulterFraisComponent {

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
