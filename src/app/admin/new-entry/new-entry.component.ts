import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TutorialDataModel } from '../services/tutorialData.model';
import { AdminDBService } from '../services/adminData.service';
import { SnackService } from 'src/app/services/snack.service';
import { Observable } from 'rxjs';
import { navListModel } from 'src/app/shared/services/navlist.model';
import { NavlistService } from 'src/app/shared/services/navlist.service';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.scss']
})
export class NewEntryComponent implements OnInit {
  newEntryForm: FormGroup;
  // editorForm: FormGroup;
  editorContent: string;
  detailString: string;  

  tutorialData: TutorialDataModel;

  chapterItems: Observable<navListModel[]>;

  constructor(
    private adminDBService: AdminDBService, 
    private snack: SnackService,
    private navService:NavlistService
    ) { }

  ngOnInit() {
    this.newForm();
    this.populateSelectBox();
  }

  newForm() {
    this.newEntryForm = new FormGroup({
      'chapterId': new FormControl(null),
      'title': new FormControl(null),
      'url': new FormControl(null),
      'description': new FormControl(null)
    })
  }

  populateSelectBox(){
    this.chapterItems = this.adminDBService.loadChapterist();
  }

  onSubmit() {
    // console.log(this.newEntryForm.value)
    // this.adminDBService.onAdd(this.newEntryForm.value);
    this.adminDBService.addTestEntry();
    this.newEntryForm.reset();
    this.snack.NewEntry();
  }

}
