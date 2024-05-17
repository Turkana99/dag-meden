import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.scss'],
})
export class Chart2Component {
  @ViewChild('chart') chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions>;

  // Move defaults inside the class
  public DEFAULT_CHART: ApexChart = {
    type: 'donut',
    // include other required properties with default values if necessary
  };

  public DEFAULT_RESPONSIVE: ApexResponsive[] = [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: 'bottom',
        },
      },
    },
  ];

  constructor() {
    this.chartOptions = {
      series: [44, 22, 13],
      chart: {
        type: 'donut',
        height: 460,
      },
      labels: ['Yüksək', 'Orta', 'Normal'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
              height: 300,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
  }
}
