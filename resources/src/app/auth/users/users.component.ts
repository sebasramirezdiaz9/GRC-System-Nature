import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any[];
  observable:Observable<any>;

  constructor(private http: HttpClient) { }

  getUsersList():void {
    this.observable = this.http.get('/api/users');

    this.observable.subscribe( response => {
      this.users = response.users;
    });
  }

  ngOnInit(): void {
    this.getUsersList();
  }

  editUser(email:string, password:string, uid:string):void  {
    let headers = new HttpHeaders().set('Content-Type','application/json');
    console.log('store');
    this.http.put<any>('/api/users', {
              uid: uid,
              email: email,
              password: password
            }, {headers: headers}).subscribe( response => {
              Swal.fire(
                'Exito!',
                'El usuario ha sido modificado exitosamente',
                'success'
              )
            },
            error => {
              Swal.fire(
                'Error!',
                'El usuario necesita un correo electronico',
                'error'
              )
            });

    setTimeout(t => {
      this.getUsersList();
    }, 1000);
  }

  deleteUser(uid:string): void {
    Swal.fire({
      title: '¿Estas seguro?',
      text: "Este usuario no podra recuperarse",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.value) {
        this.http.delete(`/api/users?uid=${uid}`).subscribe( response => {
          console.log('Operacion exitosa');
        });
        Swal.fire(
          'Eliminado!',
          'El usuario se elimino exitosamente.',
          'success'
        ).then( e => {
          this.getUsersList();
        })
      }
    })
    setTimeout(t => {
      
    }, 500);
  }
}
