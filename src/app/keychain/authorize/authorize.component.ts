import { Component, OnInit } from '@angular/core';
import {TrelloService} from "../../models/trello/trello.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.scss']
})
export class AuthorizeComponent implements OnInit {

  constructor(private trelloSvc: TrelloService, private router: Router) { }

  ngOnInit() {}

  public authorize() {
    this.trelloSvc.authorize()
        .catch((result) => console.info('noo', result));
  }

}
