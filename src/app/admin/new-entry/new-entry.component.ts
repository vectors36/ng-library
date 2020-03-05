import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.scss']
})
export class NewEntryComponent implements OnInit {
  editorForm: FormGroup;
  editorContent: String;

  editorStyle = {
    height: '300px'
  }

  constructor() { }

  ngOnInit() {
    this.editorForm = new FormGroup({
      'editor': new FormControl(null)
    })
  }

  onSubmit() {
    console.log(this.editorForm.get('editor').value);
    this.editorContent = this.editorForm.get('editor').value;
  }

}
