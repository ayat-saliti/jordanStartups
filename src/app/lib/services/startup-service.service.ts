import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';
import { sector } from '../interface/sector';
import { startup } from '../interface/startup';

@Injectable({
  providedIn: 'root'
})
export class StartupServiceService {

  startupCollection! : AngularFirestoreCollection<startup>
  sectorCollection! : AngularFirestoreCollection<sector>
  constructor(private fs: AngularFirestore) {
    this.startupCollection = this.fs.collection("startups")
    this.sectorCollection = this.fs.collection("sectors")
   }
  getStartup(): Observable<startup[]> {
    return this.startupCollection.valueChanges({ idField: 'id' });
  }


  deleteStartup(id:string) {
    return from(this.fs.collection('startups').doc(id).delete());
  }
  addStartup(startup: startup) {
    let addedStartup = this.startupCollection?.add(startup);
    return from(addedStartup);
  }
  getSector(): Observable<sector[]> {
    return this.sectorCollection.valueChanges({ idField: 'id' });
  }
  addSector(sector: sector) {
    let addSector = this.sectorCollection?.add(sector);
    return from(addSector);
  }
}
