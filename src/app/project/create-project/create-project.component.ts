import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {MdSnackBar, SnackBarState} from '@angular/material';

import {TrelloService} from "../../models/trello/trello.service";

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {

  private PROJECT_ID_PATTERN = /^[0-9]+$/;

  public projectForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private trelloService: TrelloService, private snackBar: MdSnackBar) {}

  ngOnInit() {
    this.generateForm();
  }

  public onSubmit() {

    this.trelloService.createBoard(
        this.projectForm.get('id').value,
        this.projectForm.get('name').value,
        this.projectForm.get('templateBoard').value
    )
    .then((board) => {

      console.info('Board Created: ', board);

      this.generateForm();

      const snackBarRef = this.snackBar.open(
          'Board ' + board['name'] + ' created',
          'Visit',
          {duration: 5000}
      );

      snackBarRef.onAction().subscribe(() => {
        window.open(board['url'], 'blank');
      });

    })
    .catch((err) => console.log('NEJ', err));

  }

  private generateForm() {

    if(this.projectForm) {
      this.projectForm.reset()
    }

    this.projectForm = this.formBuilder.group({
      id: ['', [Validators.required, Validators.pattern(this.PROJECT_ID_PATTERN)]],
      name: ['', Validators.required],
      templateBoard: [true]
    });
  }

}
