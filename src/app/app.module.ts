import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HighchartsChartModule } from "highcharts-angular";
import {APP_BASE_HREF} from '@angular/common';


import { AppComponent } from "./app.component";
import { SeriesComponent } from "./series/series.component";
import { SerieDetailComponent } from "./serie-detail/serie-detail.component";
import { SerieService } from "./serie.service";
import { MessagesComponent } from "./messages/messages.component";
import { MessageService } from "./message.service";
import { AppRoutingModule } from "./app-routing.module";
import { Grafico01Component } from "./grafico01/grafico01.component";

  

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HighchartsChartModule
  ],
  declarations: [
    AppComponent,
    SeriesComponent,
    SerieDetailComponent,
    MessagesComponent,
    Grafico01Component
  ],
  bootstrap: [AppComponent],
  providers: [SerieService, MessageService, {provide:
    APP_BASE_HREF, useValue: '/series'}]
})
export class AppModule {}
  