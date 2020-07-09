import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../auth/service/auth.service';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [AuthService]
})
export class MenuComponent implements OnInit {
  public user$: Observable<any>;

  constructor(private authSvc: AuthService, private spinner: NgxSpinnerService) {
    this.user$ = this.authSvc.afAuth.user;
  }

  ngOnInit(): void {
    this.spinner.show();
 
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

}
