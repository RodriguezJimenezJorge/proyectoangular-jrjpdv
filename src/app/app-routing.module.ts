import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SeriesComponent } from "./series/series.component";
import { SerieDetailComponent } from "./serie-detail/serie-detail.component";
import { Grafico01Component } from "./grafico01/grafico01.component";

const routes: Routes = [
  { path: "series", component: SeriesComponent },
  { path: "grafico", component: Grafico01Component },
  { path: "detail/:id", component: SerieDetailComponent },
  { path: "", redirectTo: "/dashboard", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
