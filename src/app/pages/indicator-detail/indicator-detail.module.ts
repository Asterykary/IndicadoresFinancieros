import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndicatorDetailPageRoutingModule } from './indicator-detail-routing.module';

import { IndicatorDetailPage } from './indicator-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndicatorDetailPageRoutingModule
  ],
  declarations: [IndicatorDetailPage]
})
export class IndicatorDetailPageModule {}
