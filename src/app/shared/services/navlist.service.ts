import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, first } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { convertSnaps } from 'src/app/services/db.utils';
import { navListModel } from './navlist.model';

@Injectable({
  providedIn: 'root'
})
export class NavlistService {

  constructor(private db: AngularFirestore) { }

  //retrieve the nav document

   loadNavList(): Observable<navListModel> {
     return this.db.collection('navList')
     .snapshotChanges()
     .pipe(
       map(snaps => {
        const navs = convertSnaps<navListModel>(snaps);
        return navs.length == 1 ? navs[0] : undefined;
       }),
       first()
     );

   }

   loadNavList2() {
    return this.db.collection('navList').valueChanges();

  }
}

// Helper: Reads an array of IDs from a collection concurrently
// const readIds = async (collection, ids) => {
//   const reads = ids.map(id => collection.doc(id).get() );
//   const result = await Promise.all(reads);
//   return result.map(v => v.data());
// }
