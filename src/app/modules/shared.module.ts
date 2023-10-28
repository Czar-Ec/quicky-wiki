import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
  ],
  exports: [
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    MaterialModule,
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    MaterialModule,
  ]
})

export class SharedModule { }
