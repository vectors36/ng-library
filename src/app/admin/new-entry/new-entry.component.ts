import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TutorialDataModel } from '../services/tutorialData.model';
import { AdminDBService } from '../services/adminData.service';

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

  editorStyle = {
    height: '300px'
  }

  tutorialData: TutorialDataModel;

  constructor(private adminDBService: AdminDBService) { }

  ngOnInit() {
    this.newForm();
  }

  newForm() {
    this.newEntryForm = new FormGroup({
      'title': new FormControl(null),
      'description': new FormControl(null)
    })

  }

  onSubmit() {
    this.adminDBService.onAdd(this.newEntryForm.value);
  }

}
