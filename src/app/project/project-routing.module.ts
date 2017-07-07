import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateProjectComponent} from "./create-project/create-project.component";
import {ProjectGuard} from "./project.guard";

const routes: Routes = [
  {
    path: '',
    component: CreateProjectComponent,
    canActivate: [ProjectGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
