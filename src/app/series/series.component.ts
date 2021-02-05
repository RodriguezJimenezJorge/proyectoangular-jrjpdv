import { Component, OnInit } from "@angular/core";
import { Serie } from "../serie";
import { SerieService } from "../serie.service";
import { MessageService } from "../message.service";

@Component({
  selector: "app-series",
  templateUrl: "./series.component.html",
  styleUrls: ["./series.component.css"]
})
export class SeriesComponent implements OnInit {
  series: Serie[];
  seriesApi = null;
  selectedSerie: Serie;
  serieTmp: any;

  constructor(
    private serieService: SerieService,
    private messageService: MessageService
  ) {}

  onSelect(serie: Serie): void {
    this.selectedSerie = serie;
    this.messageService.add(`SeriesComponent: Selected serie id=${serie.id}`);
  }

  getSeriesApi() {
    this.serieService.getSeriesApi().subscribe(series => {
      this.seriesApi = series;
      this.series = this.seriesApi;
    });
  }

  delete(serie: Serie): void {
    this.series = this.series.filter(h => h !== serie);
    this.serieService.deleteSerie(serie).subscribe();
  }

  add(nameP: string, visualizacionesP: string): void {
    const nameV = nameP.trim();
    const visualizacionesV = parseInt(visualizacionesP);
    // if (!name) {
    //   return;
    // }
    const newDoc: any = {
      name: nameV,
      visualizaciones: visualizacionesV
    };
    this.serieService.addSerie(newDoc).subscribe(serie => {
      this.serieTmp = serie;
      this.series.push(this.serieTmp);
    });
  }

  ngOnInit() {
    this.getSeriesApi();
  }
}
