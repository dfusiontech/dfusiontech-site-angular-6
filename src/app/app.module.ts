// outsource
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// modules
import { LayoutModule } from './states/layout.module';
// components
import { LayoutComponent } from './states/layout.component';
// services



@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule
    ],
    providers: [],
    bootstrap: [LayoutComponent]
})
export class AppModule {
}
