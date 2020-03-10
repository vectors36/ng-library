import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent, NavigationEnd } from '@angular/router';
import { TutorialsService } from 'src/app/services/tutorials.service';
import { TutorialModel } from 'src/app/model/tutorial.model';
import { filter } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {
  tutorial: TutorialModel;
  public destroyed = new Subject<any>();
  navigationSubscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tutorialsService: TutorialsService) 
    { 
      // subscribe to the router events
      this.navigationSubscription = this.router.events.subscribe((e: any) => {
        // If it is a NavigationEnd event re-initalise the component
        if (e instanceof NavigationEnd) {
          this.initialiseInvites();
        }
      })
    }

  ngOnInit(): void {   

  }

  // default values
  initialiseInvites() {
    this.tutorial = this.route.snapshot.data['tutorial'];
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }


}
