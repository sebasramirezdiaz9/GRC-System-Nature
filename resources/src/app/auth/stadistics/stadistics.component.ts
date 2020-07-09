import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stadistics',
  templateUrl: './stadistics.component.html',
  styleUrls: ['./stadistics.component.css']
})
export class StadisticsComponent implements OnInit {
  items:Observable<any[]>;
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'agos', 'sep', 'oct', 'nov', 'dic'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Ventas' },
  ];

  constructor(private fire:AngularFirestore) {
  }

  ngOnInit() {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    this.barChartData[0].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let cont:any[];
    this.items = this.fire.collection('sales').valueChanges(); 
    this.items.subscribe( e => {
      cont = e;
    });  
    
    let months:Array<any> = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    setTimeout(e => {
      cont.forEach(element => {
        months[element.fecha.split("-",2)[1][1]-1] += element.total;
      });
    }, 2000);

    setTimeout(e => {
        this.barChartData[0].data = months;
    }, 2000);
  }

}
