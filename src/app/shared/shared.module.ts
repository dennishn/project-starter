import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
// import {FlexLayoutModule} from '@angular/flex-layout';
// import { FlexLayoutModule } from "@angular/flex-layout/flexbox/_module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [],
  exports: [
      CommonModule,
      ReactiveFormsModule
  ]
})
export class SharedModule { }
