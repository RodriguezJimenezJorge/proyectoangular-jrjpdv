import { Injectable } from "@angular/core";
import { MessageService } from "./message.service";
import { HttpClient } from "@angular/common/http";
import { Serie } from "./serie";

@Injectable({
  providedIn: "root"
})
export class SerieService {
  private url = "https://6009dc93778d1a00177931e4.mockapi.io/seriesapi";

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  getSeriesApi() {
    this.messageService.add("Mostrando las series disponibles");
    return this.http.get(this.url);
  }

  /** PUT: update the serie by ID on the server */
  updateSerie(doc: any) {
    console.log("en update");
    console.log(doc);
    const urlId = `${this.url}/${doc.id}`;
    return this.http.put(urlId, doc);
  }

  /** DELETE: delete the serie by Id from the server */
  deleteSerie(serie: Serie) {
    // const id = typeof serie === "number" ? serie : serie.id;
    const urlId = `${this.url}/${serie.id}`;
    return this.http.delete(urlId);
  }
  /** POST: add a new serie to the server */
  addSerie(doc: any) {
    return this.http.post(this.url, doc);
  }

  /** GET serie by id. Will 404 if id not found */
  getSerie(id: number) {
    const url = `${this.url}/${id}`;
    return this.http.get(url);
  }
}
