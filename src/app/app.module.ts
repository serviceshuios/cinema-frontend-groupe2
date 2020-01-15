import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { CategorieComponent } from './categorie/categorie.component';
import { VilleComponent } from './ville/ville.component';
import { SalleComponent } from './salle/salle.component';
import { CinemaComponent } from './cinema/cinema.component';
import { PlacesComponent } from './places/places.component';
import { SeanceComponent } from './seance/seance.component';
import { TicketComponent } from './ticket/ticket.component';
import { FilmComponent } from './film/film.component';

@NgModule({
  declarations: [
    AppComponent,
    CategorieComponent,
    VilleComponent,
    SalleComponent,
    CinemaComponent,
    PlacesComponent,
    SeanceComponent,
    TicketComponent,
    FilmComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
