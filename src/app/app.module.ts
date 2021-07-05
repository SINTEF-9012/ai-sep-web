import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { WhiteBoxComponent } from './white-box/white-box.component';
import { AgileBestPracticesIndexComponent } from './agile-best-practices-index/agile-best-practices-index.component';
import { DataDrivenScrumComponent } from './data-driven-scrum/data-driven-scrum.component';
import { DataScienceResearchDevComponent } from './data-science-research-dev/data-science-research-dev.component';
import { MicrosoftTdspComponent } from './microsoft-tdsp/microsoft-tdsp.component';
import { CrispDmComponent } from './crisp-dm/crisp-dm.component';
import { CpmaiComponent } from './cpmai/cpmai.component';
import { ComparisonTableComponent } from './comparison-table/comparison-table.component';
import { GraphDataScienceComponent } from './graph-data-science/graph-data-science.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    WhiteBoxComponent,
    AgileBestPracticesIndexComponent,
    DataDrivenScrumComponent,
    DataScienceResearchDevComponent,
    MicrosoftTdspComponent,
    CrispDmComponent,
    CpmaiComponent,
    ComparisonTableComponent,
    GraphDataScienceComponent,
    IndexComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClarityModule,
    TableModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
