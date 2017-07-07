import {Component, OnInit} from '@angular/core';
import {TrelloService} from "./models/trello/trello.service";
import {Router} from "@angular/router";
import {ITrelloUser} from "./models/trello/trello.interface";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public isAuthorized: any;
  public user: ITrelloUser;
  public isLoading: boolean;

  constructor(private trelloSvc: TrelloService, private router: Router) { }

  ngOnInit() {
    this.trelloSvc.$isLoading.subscribe((isLoading) => this.isLoading = isLoading);

    this.isAuthorized = this.trelloSvc.isAuthorized;

    if (this.isAuthorized) {

      this.router.navigate(['/project']);

      this.trelloSvc.me()
		  .then((result) => {
            console.log('Hello you!', result);
            this.user = result;
          })
		  .catch((result) => this.user = null);
    } else {
      this.router.navigate(['/auth']);
    }
  }

  public unAuthorize() {
    this.trelloSvc.unAuthorize();
    this.isAuthorized = this.trelloSvc.isAuthorized;
    this.router.navigate(['/auth']);
  }
}
