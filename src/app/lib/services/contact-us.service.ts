import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';
import { contact } from '../interface/contactUs';
import { startup } from '../interface/startup';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  contactUsCollection! : AngularFirestoreCollection
  constructor(private fs: AngularFirestore) {
    this.contactUsCollection = this.fs.collection("contactUs")
   }
  getcomment(): Observable<contact[]> {
    return this.contactUsCollection.valueChanges({ idField: 'id' });
  }

  addComment(comment: contact) {
    let addedComment = this.contactUsCollection?.add(comment);
    return from(addedComment)
  }

}
