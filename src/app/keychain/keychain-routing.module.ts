import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthorizeComponent} from "./authorize/authorize.component";
import {KeychainGuard} from "./keychain.guard";

const routes: Routes = [
  {
    path: '',
    component: AuthorizeComponent,
    canActivate: [KeychainGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KeychainRoutingModule { }
