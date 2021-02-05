import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import { SerieService } from "../serie.service";
import { Serie } from "../serie";

@Component({
  selector: "app-grafico01",
  templateUrl: "./grafico01.component.html",
  styleUrls: ["./grafico01.component.css"]
})
export class Grafico01Component implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: "column"
    },
    title: {
      text: "Visualizaciones serie"
    },
    xAxis: {
      categories: []
    },

    series: [
      {
        type: "column",
        data: []
      }
    ],
    noData: {
      style: {
        fontWeight: "bold",
        fontSize: "15px",
        color: "#303030"
      }
    }
  };

  constructor(private serieService: SerieService) {}

  ngOnInit() {
    //  this.getSeriesApi();
    this.getMisDatos();
  }

  getMisDatos() {
    this.serieService.getSeriesApi().subscribe(
      result => {
        const misDatos: any = result;
        const dataSeries = misDatos.map((x: any) => x.visualizaciones);
        const dataCategorias = misDatos.map((x: any) => x.nombre);
        this.chartOptions.series[0]["data"] = dataSeries;
        this.chartOptions.xAxis["categories"] = dataCategorias;
        Highcharts.chart("grafico01", this.chartOptions);
      },
      error => console.log(error)
    );
  }
}
