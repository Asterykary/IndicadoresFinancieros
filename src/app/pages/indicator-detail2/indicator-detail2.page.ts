import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { IndicatorsService } from '../../services/indicators.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ResponseIndicatorDetail, Serie } from '../../interfaces/indicatorDetail.interface';

@Component({
  selector: 'app-indicator-detail2',
  templateUrl: './indicator-detail2.page.html',
  styleUrls: ['./indicator-detail2.page.scss'],
  providers: [DatePipe]
})
export class IndicatorDetail2Page implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [], label: '' }
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    annotation: {
      
    },
  };
  public lineChartColors: Color[] = [
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  indicator: ResponseIndicatorDetail = null;

  
  firstTenIndicators: Serie[] = null;

  constructor(private indicatorServ: IndicatorsService, private route: ActivatedRoute, private datePipe: DatePipe) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.getIndicatorDetail(id);
  }

  getIndicatorDetail(id: string){
    this.indicatorServ.getIndicatorDetail(id).subscribe((data: ResponseIndicatorDetail) => {
      this.indicator = data;
      this.firstTenIndicators = this.indicator.serie.slice(0,10);
      this.firstTenIndicators.forEach((indicator)=>{
        this.lineChartData[0].data.push(indicator.valor);
        this.lineChartLabels.push( this.datePipe.transform(indicator.fecha, 'yyyy-MM-dd'));
      });
      this.lineChartData[0].label = this.indicator.nombre;
    },
      (error) => { console.log(error); }
    );
  }


}
