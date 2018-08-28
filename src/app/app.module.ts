import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LayoutModule } from "./states/layout.module";

import { LayoutComponent } from './states/layout.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
