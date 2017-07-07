import { NgModule } from '@angular/core';
import {
    MdButtonModule, MdCheckboxModule, MdIconModule, MdInputModule, MdProgressBarModule, MdToolbarModule,
    MdTooltipModule
} from "@angular/material";

@NgModule({
  imports: [
      MdIconModule,
      MdButtonModule,
      MdInputModule,
      MdCheckboxModule,
      MdToolbarModule,
      MdTooltipModule,
      MdProgressBarModule
  ],
  exports: [
      MdIconModule,
      MdButtonModule,
      MdInputModule,
      MdCheckboxModule,
      MdToolbarModule,
      MdTooltipModule,
      MdProgressBarModule
  ],
})
export class AppMaterialModule { }
