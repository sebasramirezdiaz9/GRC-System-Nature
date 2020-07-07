import { Injectable } from '@angular/core';
import { User } from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: User;

  constructor(public afAuth: AngularFireAuth, 
              private router: Router) { 
  }

  async login(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      console.log("accede");
      this.router.navigate(['system/welcome']);

    } catch (error) {
      console.log(error);

      Swal.fire(
        'Verifica tus datos',
        'La contraseña o el email son incorrectos',
        'error'
      )
      this.router.navigate(['/login']);
    }

  }

  async register(email: string, password: string) {

    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      return result;
    }
    catch (error) {
      console.log(error);
    }
  }

  async logout() {
    try {
      await this.afAuth.signOut();
    }
    catch (error) {
      console.log(error);
    }

  }

  getCurrenUser() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}
