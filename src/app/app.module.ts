import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-CO';
registerLocaleData(localeEs, 'es-CO');

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es-CO' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
