import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from './../../../auth/service/auth.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css'],
  providers: [AuthService]
})
export class ToolsComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  onLogout(){
    this.authSvc.logout();
    

  }

}
