import { Injectable } from '@angular/core';
import {ITrelloProjectBoard, ITrelloUser} from "./trello.interface";
import {Router} from "@angular/router";

import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

declare const Trello;

@Injectable()
export class TrelloService {

  private _nodesOrganizationId = '54368d8c4444a3f9f4cac693';
  private _nodesTemplateBoardId = '5437cbc9db2c55be2e5df351';
  private _nodesTemplatePermissionsLevel = 'org';

  private _isLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public readonly $isLoading: Observable<boolean>;

  private _isAuthorized: boolean;

  public get isAuthorized(): boolean {
    return this._isAuthorized;
  }
  public set isAuthorized(a: boolean) {
    this._isAuthorized = a;
  }

  constructor(private router: Router) {

    this.$isLoading = this._isLoading.asObservable();

    // Start by checking the off-site auth state
    Trello.authorize({
      interactive: false,
      success: () => this.isAuthorized = Trello.authorized(),
      error: () => this.isAuthorized = false
    });
  }

  /**
   * Authorization Methods
   */

  /**
   * Authorize with Trello
   * @returns {Promise<boolean>}
   */
  public authorize(): Promise<boolean> {

    return new Promise((resolve, reject) => {

      Trello.authorize({
        name: 'Nodes Project Trello Board Starter',
        scope: {read: 'true', write: 'true' },
        expiration: '1hour',
        persist: true,
        success: onSuccess,
        error: onError
      });

      function onSuccess(e) {
        this.isAuthorized = Trello.authorized();
        resolve(true);
      }

      function onError(e) {
        this.isAuthorized = Trello.authorized();
        reject(false);
      }

    });

  }

  /**
   * Unauthorize with Trello
   */
  public unAuthorize(): void {
    this.isAuthorized = false;
    Trello.deauthorize();
  }

  /**
   * User Methods
   */

  /**
   * Gets the Authorized user information
   * @returns {Promise<ITrelloUser>}
   */
  public me(): Promise<ITrelloUser> {
    return new Promise((resolve, reject) => {

      Trello.get('/member/me', {
            fields: 'username,fullName,avatarHash',
            organizations: 'all',
            organization_fields: 'displayName'
          },
          (member) => resolve(member),
          (err) => {
            this.handleError(err);
            reject(err);
          }
      )

    });
  }

  /**
   * Board Methods
   */

  public createBoard(id: string, name: string, useTemplate: boolean) {

    this._isLoading.next(true);

    const payload: ITrelloProjectBoard = {
      name: '[' + id + '] ' + name,
      idOrganization: this._nodesOrganizationId,
      prefs_permissionLevel: this._nodesTemplatePermissionsLevel
    };

    if (useTemplate) {
      payload['idBoardSource'] = this._nodesTemplateBoardId;
    }

    return new Promise((resolve, reject) => {

      Trello.post('/boards', payload,
          (board) => {
            this._isLoading.next(false);
            resolve(board)
          },
          (err) => {
            this._isLoading.next(false);
            this.handleError(err);
            reject(err);
          }
      )

    });
  }

  private handleError(err: any) {
    console.log('err', err);
    if (err.status === 401) {
      this.unAuthorize();
      this.router.navigate(['/auth']);
    }
  }

}
