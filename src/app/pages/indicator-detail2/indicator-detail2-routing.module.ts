import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndicatorDetail2Page } from './indicator-detail2.page';

const routes: Routes = [
  {
    path: '',
    component: IndicatorDetail2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndicatorDetail2PageRoutingModule {}
