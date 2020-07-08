import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any[];
  observable:Observable<any>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.observable = this.http.get('/api/users');

    this.observable.subscribe( response => {
      console.log(response);
      this.users = response.users;
    });
  }

}
