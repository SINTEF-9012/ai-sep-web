import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

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


const routes: Routes = [
  { path: '', component: IndexComponent },
  {
    path: 'white-box',
    component: WhiteBoxComponent,
  },
  {
    path: 'agile-ai-frameworks',
    component: AgileBestPracticesIndexComponent,
  },
  {
    path: 'agile-ai-frameworks/data-driven-scrum',
    component: DataDrivenScrumComponent,
  },
  {
    path: 'agile-ai-frameworks/data-science-research-dev',
    component: DataScienceResearchDevComponent,
  },
  {
    path: 'agile-ai-frameworks/microsoft-tdsp',
    component: MicrosoftTdspComponent,
  },
  {
    path: 'agile-ai-frameworks/crisp-dm',
    component: CrispDmComponent,
  },
  {
    path: 'agile-ai-frameworks/cpmai',
    component: CpmaiComponent,
  },
  {
    path: 'agile-ai-frameworks/comparison-table',
    component: ComparisonTableComponent,
  },
  {
    path: 'graph-data-science',
    component: GraphDataScienceComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
