import { Component, OnInit } from '@angular/core';
import { NavlistService } from '../../services/navlist.service';
import { Observable } from 'rxjs';
import { navListModel } from '../../services/navlist.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-accordion-menu',
  templateUrl: './accordion-menu.component.html',
  styleUrls: ['./accordion-menu.component.scss']
})
export class AccordionMenuComponent implements OnInit {
  // navList$: Observable<navListModel[]>;
  navList: navListModel;
  items: Observable<any[]>;
  
  constructor(private navService:NavlistService, private db: AngularFirestore ) {
    this.items = db.collection('navList').valueChanges();
   }

  ngOnInit() {
    // this.navList = this.navService.loadNavList();
    // console.log(this.navList);
    // this.navList = this.navService.loadNavList();
    // console.log(this.navService.loadNavList2());    
    // console.log(this.navList);
    console.log(this.items);

  }

}


// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { TutorialsService } from 'src/app/services/tutorials.service';
// import { TutorialModel } from 'src/app/model/tutorial.model';

// @Component({
//   selector: 'app-tutorial',
//   templateUrl: './tutorial.component.html',
//   styleUrls: ['./tutorial.component.scss']
// })
// export class TutorialComponent implements OnInit {
//   tutorial: TutorialModel;

//   constructor(
//     private route: ActivatedRoute,
//     private tutorialsService: TutorialsService
//     ) { }

//   ngOnInit() {    
//     this.tutorial = this.route.snapshot.data['tutorial'];
//   }


// }