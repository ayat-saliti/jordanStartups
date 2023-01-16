import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { startup } from 'src/app/lib/interface/startup';


@Component({
  selector: 'app-startups-details',
  templateUrl: './startups-details.component.html',
  styleUrls: ['./startups-details.component.css']
})
export class StartupsDetailsComponent {
  startupCollection!: AngularFirestoreCollection<startup>;
  readonly items$ = this.firestore.collection('items').valueChanges({ idField: 'id'});
  constructor(private firestore: AngularFirestore, private router:Router) { }
  ngOnInit(): void {
    // this.getStartupByID();
  }


  // getStartupByID() {
    // readonly items$ = collectionChanges(
    //   collection(this.firestore, 'items')
    // ).pipe(
    //   map((items) =>
    //     items.map((item) => {
    //       const data = item.doc.data();
    //       const id = `idprefix-${item.doc.id}`;
    //       return { id, ...data };
    //     })
    //   )
    // );
    
    
// return this.startupCollection.snapshotChanges().pipe(
//   map(obj => {       
//   return obj.map(a => {
//     const startup = a.payload.doc.data() as startup;
//     startup.id = a.payload.doc.id;
//     return startup;
    
//   })}
//     ))
//       }


}
