import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { TutorialsCardListComponent } from './tutorials-card-list/tutorials-card-list.component';
import { SharedModule } from '../shared/shared.module';
import { TutorialResolver } from '../services/tutorial.resolver';


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
  ],
  providers: [
    TutorialResolver
  ]
})
export class MainModule { }
