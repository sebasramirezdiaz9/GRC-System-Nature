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
  public user: any;

  constructor(private authSvc: AuthService, private spinner: NgxSpinnerService) {
    this.authSvc.afAuth.user.subscribe(e => {
      this.user = e;
    });
  }

  ngOnInit(): void {
    this.spinner.show();
 
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

}
