import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userCollection! : AngularFirestoreCollection<User>
  
  constructor(private fs: AngularFirestore) { 

  this.userCollection = this.fs.collection("users")
 
 }
  getUser(): Observable<User[]> {
    return this.userCollection.valueChanges({ idField: 'id' });
  }

}
