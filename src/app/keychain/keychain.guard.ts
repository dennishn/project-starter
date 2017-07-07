import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {TrelloService} from "../models/trello/trello.service";

@Injectable()
export class KeychainGuard implements CanActivate {

  constructor(private trelloService: TrelloService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return this.checkAuthorization();

  }

  private checkAuthorization(): boolean {
    if (this.trelloService.isAuthorized) {
      this.router.navigate(['/project']);
      return false;
    }

    return true;
  }
}
