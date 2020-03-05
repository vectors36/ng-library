import { Observable, of, Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { TutorialDataModel } from './tutorialData.model';

@Injectable({
    providedIn: 'root'
  })
export class AdminDBService {
    constructor(private db: AngularFirestore) { }

    // Add new document
    onAdd(td: TutorialDataModel) {
        console.log(td);
        this.db.collection(`tutorials`).add(td);
    }
}