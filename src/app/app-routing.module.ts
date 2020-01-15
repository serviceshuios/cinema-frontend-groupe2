import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategorieComponent } from './categorie/categorie.component';
import { CinemaComponent } from './cinema/cinema.component';
import { VilleComponent } from './ville/ville.component';
import { SalleComponent } from './salle/salle.component';
import { PlacesComponent } from './places/places.component';
import { SeanceComponent } from './seance/seance.component';
import { FilmComponent } from './film/film.component';
import { TicketComponent } from './ticket/ticket.component';
import { ProjectionfilmComponent } from './projectionfilm/projectionfilm.component';
import { HomeComponent } from './home/home.component';


// definir les routes de mon projet
const routes: Routes = [
  // creation des routes
  { path: 'categorie', component: CategorieComponent},
  { path: 'cinema', component: CinemaComponent},
  { path: 'ville', component: VilleComponent},
  { path: 'salle', component: SalleComponent},
  { path: 'place', component: PlacesComponent},
  { path : 'seance', component: SeanceComponent},
  { path : 'film', component: FilmComponent},
  { path : 'projectionFilm', component: ProjectionfilmComponent},
  { path : 'ticket', component: TicketComponent},
  { path : 'home', component: HomeComponent},

  {
    // si rien, alors avoir par defaut
    path: '',
    // redirection vers path existant
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
