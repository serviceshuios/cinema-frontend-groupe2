import { Component, OnInit } from '@angular/core';
import { VilleService } from '../services/ville.service';
import { Cinema } from '../models/Cinema.model';
import { CinemaService } from '../services/Cinema.service';
import { Ville } from '../models/Ville.model';
import { Salle } from '../models/salle.model';
import { SalleService } from '../services/salle.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

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
  cinemas; villes;

  constructor(private cinemaService: CinemaService,
              private villeService: VilleService,
              private salleService: SalleService) { }

  ngOnInit() {
    this.retrouverToutVille();
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


}// end class
