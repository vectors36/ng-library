import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { userHomeModel } from './userHome.model';
import { userHomeService } from './userHome.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  homeCards: userHomeModel[] = [];

  constructor(
    public afAuth: AngularFireAuth,
    private userHomeService: userHomeService) { }

  ngOnInit(): void {
    this.homeCards = this.userHomeService.getUserData();
  }

}
