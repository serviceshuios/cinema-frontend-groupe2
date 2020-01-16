import { Component, OnInit } from '@angular/core';
import { Cinema } from '../models/Cinema.model';
import { CinemaService } from '../services/Cinema.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {

  cinema: Cinema = {

    id: 0,
    name: '',
    latitude: 0,
    altitude: 0,
    longitude: 0,
    nombreSalles: 0,
  };

  // liste des Cinemas
  cinemas;

  constructor(private cinemaService: CinemaService) { }

  ngOnInit() {
    this.retrouverTout();
  }

  saveCinema() {
    this.cinemaService.saveCinema(this.cinema)
      .subscribe(data => {
        this.cinema = data;
        this.retrouverTout();
        this.cinema.name = '';
        this.cinema.nombreSalles = 0;
      });

  }

  retrouverTout() {
    this.cinemaService.retrouverTout()
      .subscribe(data => {
        this.cinemas = data;
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
