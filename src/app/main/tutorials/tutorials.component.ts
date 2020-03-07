import { Component, OnInit } from '@angular/core';
import { TutorialModel } from 'src/app/model/tutorial.model';
import { Observable } from 'rxjs';
import { TutorialsService } from 'src/app/services/tutorials.service';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss']
})
export class TutorialsComponent implements OnInit {
  tutorials$: Observable<TutorialModel[]>;

  constructor(private tutorialsService: TutorialsService) { }

  ngOnInit() {
    this.loadTutorials();
  }

  loadTutorials() {
    this.tutorials$ = this.tutorialsService.loadAllTutorials();
  }

}
