import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IndicatorsService } from '../../services/indicators.service';
import { ResponseIndicators } from '../../interfaces/indicators.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  indicators: ResponseIndicators = null;

  indicatorsKeys: string[] = null;

  constructor(public indicatorsS: IndicatorsService, private navCtrl: NavController) {

    
  }

  ngOnInit() {
    this.indicatorsS.getData().subscribe((data: ResponseIndicators) => {
      this.indicators = data;
      delete this.indicators['fecha'];
      delete this.indicators['version'];
      delete this.indicators['autor'];
      this.indicatorsKeys = Object.keys(this.indicators);

    },
      (error) => { console.log(error); }
    );
  }

  goToDetail(id: string){
    this.navCtrl.navigateForward('/indicator-detail/'+ id);
  }

  goToDetailTwo(id: string){
    this.navCtrl.navigateForward('/indicator-detail2/'+ id);
  }


}
