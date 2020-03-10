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

  // retrieve the nav document
   loadNavList(): Observable<navListModel[]> {
    return this.db.collection('navList', ref => ref.orderBy('heading'))
    .snapshotChanges()
    .pipe(
      map(snaps => convertSnaps<navListModel>(snaps)),
      first()
    )
  }

  // general DB query
  dbQuery() {
    this.db.collection('navList')
    .valueChanges()
    .subscribe(val => console.log(val));
  }

}