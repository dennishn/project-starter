import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { CreateProjectComponent } from './create-project/create-project.component';
import {ProjectGuard} from "./project.guard";
import {SharedModule} from "../shared/shared.module";
import {AppMaterialModule} from "../shared/material.module";

@NgModule({
  imports: [
    SharedModule,
    AppMaterialModule,
    ProjectRoutingModule
  ],
  providers: [
      ProjectGuard
  ],
  declarations: [
      CreateProjectComponent
  ]
})
export class ProjectModule { }
