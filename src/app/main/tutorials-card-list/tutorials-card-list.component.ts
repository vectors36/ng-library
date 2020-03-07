import { Component, OnInit, Input } from '@angular/core';
import { TutorialModel } from 'src/app/model/tutorial.model';

@Component({
  selector: 'app-tutorials-card-list',
  templateUrl: './tutorials-card-list.component.html',
  styleUrls: ['./tutorials-card-list.component.scss']
})
export class TutorialsCardListComponent implements OnInit {

  @Input()
  tutorials: TutorialModel[];

  constructor() { }

  ngOnInit() {
    
  }

}
