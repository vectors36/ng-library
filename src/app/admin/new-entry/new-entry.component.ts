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
  editorForm: FormGroup;
  editorContent: String;
  detailString: string;

  editorStyle = {
    height: '300px'
  }

  tutorialData: TutorialDataModel;

  constructor(private adminDBService: AdminDBService) { }

  ngOnInit() {
    this.editorForm = new FormGroup({
      'editor': new FormControl(null)
    })
  }

  onSubmit() {
    this.editorContent = this.editorForm.get('editor').value;
    this.tutorialData = this.editorForm.value;
    this.adminDBService.onAdd(this.tutorialData);
  }

}
