import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TrelloService} from "../../models/trello/trello.service";

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {

  private PROJECT_ID_PATTERN = /^[0-9]+$/;

  public projectForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private trelloService: TrelloService) {}

  ngOnInit() {

    this.projectForm = this.formBuilder.group({
      id: ['', [Validators.required, Validators.pattern(this.PROJECT_ID_PATTERN)]],
      name: ['', Validators.required],
      templateBoard: [true]
    });

  }

  public onSubmit() {

    this.trelloService.createBoard(
        this.projectForm.get('id').value,
        this.projectForm.get('name').value,
        this.projectForm.get('templateBoard').value
    )
    .then((board) => console.log('BBBBB', board))
    .catch((err) => console.log('NEJ', err));

  }

}
