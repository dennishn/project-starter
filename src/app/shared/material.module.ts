import { NgModule } from '@angular/core';
import {
    MdButtonModule, MdCheckboxModule, MdIconModule, MdInputModule, MdProgressBarModule, MdSnackBarModule,
    MdToolbarModule,
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
      MdProgressBarModule,
      MdSnackBarModule
  ],
  exports: [
      MdIconModule,
      MdButtonModule,
      MdInputModule,
      MdCheckboxModule,
      MdToolbarModule,
      MdTooltipModule,
      MdProgressBarModule,
      MdSnackBarModule
  ],
})
export class AppMaterialModule { }
