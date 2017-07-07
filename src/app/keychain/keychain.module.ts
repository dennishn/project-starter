import { NgModule } from '@angular/core';

import { KeychainRoutingModule } from './keychain-routing.module';
import { AuthorizeComponent } from './authorize/authorize.component';
import {TrelloService} from "../models/trello/trello.service";
import {SharedModule} from "../shared/shared.module";
import {AppMaterialModule} from "../shared/material.module";
import {KeychainGuard} from "./keychain.guard";

@NgModule({
  imports: [
    SharedModule,
    AppMaterialModule,
    KeychainRoutingModule
  ],
  declarations: [
      AuthorizeComponent
  ],
  providers: [
      KeychainGuard,
      TrelloService
  ]
})
export class KeychainModule { }
