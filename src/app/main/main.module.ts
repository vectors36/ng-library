import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { TutorialsCardListComponent } from './tutorials-card-list/tutorials-card-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    TutorialComponent,
    TutorialsComponent,
    TutorialsCardListComponent    
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule
  ]
})
export class MainModule { }
