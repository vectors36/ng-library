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
import { LoginPageComponent } from './user/login-page/login-page.component';
import { EmailLoginComponent } from './user/email-login/email-login.component';
import { UserHomeComponent } from './user/user-home/user-home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    EmailLoginComponent,
    UserHomeComponent
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
    FlexLayoutModule
  ],
  providers: [treeNodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
