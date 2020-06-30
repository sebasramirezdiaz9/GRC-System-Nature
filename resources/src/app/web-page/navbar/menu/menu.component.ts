import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../auth/service/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [AuthService]
})
export class MenuComponent implements OnInit {
  public user: any;

  constructor(private authSvc: AuthService) {
    this.authSvc.afAuth.user.subscribe(e => {
      this.user = e;
    });
  }

  ngOnInit(): void {
  }

}
