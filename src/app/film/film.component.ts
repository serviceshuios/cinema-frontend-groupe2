import { Component, OnInit } from '@angular/core';
import { Film } from '../models/film.model';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
   film: Film = {

idFilm: 0,
 dateSortie: null,
 description: '',
 duree: 0,
 titre: '',
 photo: '',
 realisateur: ''



  };
  // liste des films
  films;

  constructor(private filmService: FilmService) { }



  ngOnInit() {
    this.retrouverTout();
  }

  savefilm() {
    this.filmService.ajouter(this.film)
      .subscribe(data => {
        this.film = data
        this.retrouverTout();
        this.film.photo = "";
        this.film.idFilm = 0;
        this.film.duree = 0;
        this.film.description = "";
        this.film.dateSortie = null;
        this.film.realisateur= '';
        this.film.titre= '';

      });
  }

  retrouverTout() {
    this.filmService.recupererTout()
      .subscribe(data => {
        this.films = data
      })
  }

  retrouver(id: number) {
    this.filmService.recuperer(id)
      .subscribe(data => {
        this.film = data;
      })
  }

  supprimer(id: number) {
    this.filmService.supprimer(id)
      .subscribe(data => this.ngOnInit());
  }

 modifier(id: number) {
    this.filmService.recuperer(id)
                       .subscribe( data => {
                        this.film = data;
                       });
  }
  detail(id: number) {
this.filmService.recuperer(id)
.subscribe(data => {
this.film = data;
})
}

}
