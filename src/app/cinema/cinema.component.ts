import { Component, OnInit } from '@angular/core';
import { Cinema } from '../models/Cinema.model';
import { CinemaService } from '../services/Cinema.service';
import { Ville } from '../models/Ville.model';
import { VilleService } from '../services/Ville.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {

  cinema: Cinema = {

    id: 0,
    name: '',
    longitude: 0,
    latitude: 0,
    altitude: 0,
    nombreSalles: 0,
    ville: null
  };

  // liste des Cinemas
  cinemas; villes;

  constructor(private cinemaService: CinemaService, private villeService: VilleService) { }

  ngOnInit() {
    this.retrouverTout();
    this.retrouverToutVille();
  }

  saveCinema() {
    this.cinemaService.saveCinema(this.cinema)
      .subscribe(data => {
        this.cinema = data;
        this.retrouverTout();
        this.retrouverToutVille();
        this.cinema.id = 0;
        this.cinema.name = '';
        this.cinema.nombreSalles = 0;
        this.cinema.ville = null;
      });

  }

  retrouverTout() {
    this.cinemaService.retrouverTout()
      .subscribe(data => {
        this.cinemas = data;
      });

  }

  retrouverToutVille() {
    this.villeService.recupererTout()
      .subscribe(data => {
        this.villes = data;
      });

  }

  retrouver(id: number) {
    this.cinemaService.retrouver(id)
      .subscribe(data => {
        this.cinema = data;
      });
  }

  supprimer(id: number) {
    this.cinemaService.supprimer(id)
      .subscribe(data => this.ngOnInit());
  }


  detail(id: number) {
    this.cinemaService.retrouver(id)
      .subscribe(data => {
        this.cinema = data;
      });
  }
}
