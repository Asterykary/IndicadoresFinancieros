import { Component, OnInit } from '@angular/core';
import { IndicatorsService } from '../../services/indicators.service';
import { ActivatedRoute } from '@angular/router';
import { ResponseIndicatorDetail } from 'src/app/interfaces/indicatorDetail.interface';

@Component({
  selector: 'app-indicator-detail',
  templateUrl: './indicator-detail.page.html',
  styleUrls: ['./indicator-detail.page.scss'],
})
export class IndicatorDetailPage implements OnInit {

  indicator: ResponseIndicatorDetail = null;

  constructor(private indicatorServ: IndicatorsService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.getIndicatorDetail(id);
  }

  getIndicatorDetail(id: string){
    this.indicatorServ.getIndicatorDetail(id).subscribe((data: ResponseIndicatorDetail) => {
      this.indicator = data;
    },
      (error) => { console.log(error); }
    );
  }

}
