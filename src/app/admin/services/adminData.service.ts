import { Observable, of, Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map, first } from 'rxjs/operators';
import { TutorialDataModel } from './tutorialData.model';
import { navListModel, navLinks } from 'src/app/shared/services/navlist.model';
import { convertSnaps } from 'src/app/services/db.utils';

@Injectable({
  providedIn: 'root'
})
export class AdminDBService {
  newData: navListModel;
  newSubData: navLinks;

  constructor(private db: AngularFirestore) { }

  // Add new document
  onAdd(td: TutorialDataModel) {
    this.db.collection(`tutorials`).add(td);
  }

  // retrieve the nav document
  loadChapterist(): Observable<navListModel[]> {
    return this.db.collection('navList', ref => ref.orderBy('heading'))
      .snapshotChanges()
      .pipe(
        map(snaps => convertSnaps<navListModel>(snaps)), first()
      )
  }

  addTestEntry() {
    this.newSubData = {
      title: 'subtitle',
      url: 'urlPath'
    }

    this.newData = {
      heading: 'headingValue',
      subheadings: [
        this.newSubData
      ]
    };

    console.log(this.newData);

    this.db.collection('testEntry').add(this.newData);
  }





}