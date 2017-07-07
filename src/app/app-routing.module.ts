import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'auth',
    loadChildren: 'app/keychain/keychain.module#KeychainModule'
  },
  {
    path: 'project',
    loadChildren: 'app/project/project.module#ProjectModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
