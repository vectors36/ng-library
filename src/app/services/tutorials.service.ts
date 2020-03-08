import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { TutorialModel } from '../model/tutorial.model';
import { map, first } from 'rxjs/operators';
import { convertSnaps } from './db.utils';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TutorialsService {

  constructor(private db: AngularFirestore) { }

  loadAllTutorials(): Observable<TutorialModel[]> {
    return this.db.collection('tutorials', ref => ref.orderBy("title"))
      .snapshotChanges()
      .pipe(
        map(snaps => convertSnaps<TutorialModel>(snaps)),
        first()
      );
  }


  findTutorialByUrl(tutorialUrl: string): Observable<TutorialModel> {
    // console.log(tutorialUrl);
    // tutorialUrl = "value";
    return this.db.collection('tutorials',
      ref => ref.where("url", "==", tutorialUrl))
      .snapshotChanges()
      .pipe(
        map(snaps => {
          const tutorials = convertSnaps<TutorialModel>(snaps);
          return tutorials.length == 1 ? tutorials[0] : undefined;          
        }),
        first()
      );
  }
}
