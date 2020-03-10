import { Component, OnInit } from '@angular/core';
import { NavlistService } from '../../services/navlist.service';
import { Observable } from 'rxjs';
import { navListModel } from '../../services/navlist.model';

@Component({
  selector: 'app-accordion-menu',
  templateUrl: './accordion-menu.component.html',
  styleUrls: ['./accordion-menu.component.scss']
})
export class AccordionMenuComponent implements OnInit {
  items: Observable<navListModel[]>;

  
  constructor(private navService:NavlistService ) {
   }

  ngOnInit() {
    this.items = this.navService.loadNavList();
  }
}
