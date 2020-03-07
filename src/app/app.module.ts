import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
// Angular Fire
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
//
import { environment } from '../environments/environment';
//FxFlex
import {FlexLayoutModule} from '@angular/flex-layout';
import { treeNodeService } from './shared/services/treeNode.service';
import { QuillModule } from 'ngx-quill';
import { TutorialsService } from './services/tutorials.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    FlexLayoutModule,
    QuillModule
  ],
  providers: [treeNodeService, TutorialsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
