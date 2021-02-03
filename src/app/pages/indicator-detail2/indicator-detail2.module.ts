import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndicatorDetail2PageRoutingModule } from './indicator-detail2-routing.module';

import { IndicatorDetail2Page } from './indicator-detail2.page';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndicatorDetail2PageRoutingModule,
    ChartsModule
  ],
  declarations: [IndicatorDetail2Page]
})
export class IndicatorDetail2PageModule {}
