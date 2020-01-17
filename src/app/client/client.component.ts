import { Component, OnInit } from '@angular/core';
import { VilleService } from '../services/ville.service';
import { Cinema } from '../models/Cinema.model';
import { CinemaService } from '../services/Cinema.service';
import { Ville } from '../models/Ville.model';
import { Salle } from '../models/salle.model';
import { SalleService } from '../services/salle.service';
import { Projectionfilm } from '../models/projectionfilm.model';
import { ProjectionfilmService } from '../services/projectionfilm.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  test = 0;

  projectionfilm: Projectionfilm = {

    idProjectionFilm: 0,
    dateProjection: null,
    prix: 0,
    salle: null,
    seance: null,
    film: null

  };
  salle: Salle = {

    id: 0,
    name: '',
    nombrePlaces: 0,
    cinema: null,

  };


  aville: Ville = {

    id: 0,
    name: '',
    latitude: 0,
    altitude: 0,
    longitude: 0,

  };

  cinema: Cinema = {

    id: 0,
    name: '',
    longitude: 0,
    latitude: 0,
    altitude: 0,
    nombreSalles: 0,
    ville: null
  }

  // liste des Cinemas
  cinemas; villes; salles; projections;

  constructor(private cinemaService: CinemaService,
              private villeService: VilleService,
              private salleService: SalleService,
              private projectionfilmService: ProjectionfilmService) { }

  ngOnInit() {
    this.retrouverToutVille();
    this.retrouverToutProjectionSalle(this.test);
    this.retrouverToutProjection();
  }

  retrouverToutVille() {
    this.villeService.recupererTout()
      .subscribe(data => {
        this.villes = data;
      });
  }// end retrouverToutVille()

  retrouverToutCinema(id: number) {
    id = this.cinema.ville.id;
    this.cinemaService.recupererCinemas(id)
      .subscribe(data => {
        this.cinemas = data;
      });

  }// end retrouverToutCinema

  retrouverToutSalle(id: number) {
    id = this.salle.cinema.id;
    this.salleService.recupererSalles(id)
      .subscribe(data => {
        this.salles = data;
      });
    this.retrouverToutProjectionSalle(this.projectionfilm.salle.id);
  }// end retrouverToutSalle

  retrouverToutProjectionSalle(id: number) {
    id = this.projectionfilm.salle.id;
    this.projectionfilmService.recupererProjections(id)
      .subscribe(data => {
        this.salles = data;
      });

  }// end retrouverToutProjection

    retrouverToutProjection() {
    this.projectionfilmService.retrouverTout()
      .subscribe(data => {
        this.projections = data;
      });
  }


}// end class
