import { SharedServiceService } from './../services/shared-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

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
