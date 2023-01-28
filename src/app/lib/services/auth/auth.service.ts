import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { of, observable , switchMap } from 'rxjs';
import { User } from '../../interface/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userState$ = this.fireAuth.authState;
  
  constructor(private fireAuth: AngularFireAuth,private fs: AngularFirestore) { }

  signIn(email: string, password: string){
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  signUp(name: string, phone:string, email: string, password: string){
    return this.fireAuth.createUserWithEmailAndPassword(email, password).then((val)=>{
      //creat a user collection
      let user: User = {
      id: val.user?.uid,
      name: name
    };
    return this.fs.collection<User>('users').doc(val.user?.uid).set(user);
    
    });
  }

}
