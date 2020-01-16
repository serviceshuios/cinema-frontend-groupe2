import { Component, OnInit } from '@angular/core';
import { Salle } from '../models/salle.model';
import { SalleService } from '../services/salle.service';
import { Cinema } from '../models/cinema.model';
import { CinemaService } from '../services/cinema.service';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit {

   salle: Salle = {

 id: 0,
 name: '',
 nombrePlaces: 0,
 cinema: null,

  };

  // liste des salles
  salles; cinemas;

  constructor(private salleService: SalleService, private cinemaService: CinemaService) { }

  ngOnInit() {
    this.retrouverTout();
    this.retrouverToutCinema();
  }
   saveSalle() {
    this.salleService.ajouter(this.salle)
      .subscribe(data => {
        this.salle = data
        this.retrouverTout();
        this.retrouverToutCinema();
        this.salle.id = 0;
        this.salle.name = '';
        this.salle.nombrePlaces = 0;
        this.salle.cinema = null;
      });
  }

  retrouverTout() {
    this.salleService.recupererTout()
      .subscribe(data => {
        this.salles = data
      })
  }

   retrouverToutCinema() {
    this.cinemaService.retrouverTout()
      .subscribe(data => {
        this.cinemas = data
      })
  }

  retrouver(id: number) {
    this.salleService.recuperer(id)
      .subscribe(data => {
        this.salle = data;
      })
  }

  supprimer(id: number) {
    this.salleService.supprimer(id)
      .subscribe(data => this.ngOnInit());
  }

 modifier(id: number) {
    this.salleService.recuperer(id)
                       .subscribe( data => {
                        this.salle = data;
                       });
  }
    detail(id: number) {
this.salleService.recuperer(id)
.subscribe(data => {
this.salle = data;
})
}



}
