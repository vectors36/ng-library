import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TutorialsService } from 'src/app/services/tutorials.service';
import { TutorialModel } from 'src/app/model/tutorial.model';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {
  tutorial: TutorialModel;

  constructor(private route: ActivatedRoute,
    private tutorialsService: TutorialsService) { }

  ngOnInit() {    
    // this.tutorial = this.route.snapshot.data['tutorial'];
  }


}
