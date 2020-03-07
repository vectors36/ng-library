import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { TutorialResolver } from '../services/tutorial.resolver';
import { TutorialsComponent } from './tutorials/tutorials.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'tutorials', component: TutorialsComponent
  },
  {
    path: 'tutorials/:tutorialUrl',
    component: TutorialComponent,
    resolve: {
      tutorial: TutorialResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
