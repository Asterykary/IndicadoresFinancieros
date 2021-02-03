import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IndicatorsService } from '../../services/indicators.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  indicators: any = null;

  indicatorsKeys: any[] = null;

  constructor(public indicatorsS: IndicatorsService, private navCtrl: NavController) {

    
  }

  ngOnInit() {
    this.indicatorsS.getData().subscribe((data) => {
      console.log(data);
      this.indicators = data;
      delete this.indicators['fecha'];
      delete this.indicators['version'];
      delete this.indicators['autor'];
      this.indicatorsKeys = Object.keys(this.indicators);

      console.log(this.indicatorsKeys);
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
