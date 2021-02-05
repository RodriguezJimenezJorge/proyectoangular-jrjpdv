import { Component, OnInit, Input } from "@angular/core";
import { Serie } from "../serie";
import { SerieService } from "../serie.service";
import { MessageService } from "../message.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-serie-detail",
  templateUrl: "./serie-detail.component.html",
  styleUrls: ["./serie-detail.component.css"]
})
export class SerieDetailComponent implements OnInit {
  // @Input() and @Output() allow Angular to share data between the parent context and child directives or components
  serie: Serie;

  constructor(
    private serieService: SerieService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.getSerie();
  }
  save(visualizacionesP: string): void {
    const doc = {
      id: this.serie.id,
      nombre: this.serie.nombre,
      visualizaciones: parseInt(visualizacionesP)
    };
    this.serieService.updateSerie(doc).subscribe(() => this.goBack());
  }
  /*
  Para recuperar el documento por el Id reicibido como parámetro
  */
  getSerie(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.serieService.getSerie(id).subscribe(serie => {
      const serieTmp: any = serie;
      this.serie = serieTmp;
    });
  }
  goBack(): void {
    this.location.back();
  }
}
