import { Component, OnInit } from '@angular/core';
import { Projectionfilm } from '../models/projectionfilm.model';
import { ProjectionfilmService } from '../services/projectionfilm.service';
import { SalleService } from '../services/salle.service';
import { SeanceService } from '../services/seance.service';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-projectionfilm',
  templateUrl: './projectionfilm.component.html',
  styleUrls: ['./projectionfilm.component.css']
})
export class ProjectionfilmComponent implements OnInit {

  projectionfilm: Projectionfilm = {

    idProjectionFilm: 0,
    dateProjection: null,
    prix: 0,
    salle: null,
    seance: null,
    film: null

  };
  // liste des projectionfilms
  projectionfilms;

  // Liste des salles
  salles;

  // Liste des seances
  seances;

  // Liste des films
  films;

  constructor(private projectionfilmService: ProjectionfilmService, private salleService: SalleService,
              private seanceService: SeanceService, private filmService: FilmService) { }

  ngOnInit() {
    this.retrouverTout();
    this.retrouverToutesSalles();
    this.getAllSeances();
    this.retrouverTousFilms();
  }

  saveProjectionfilm() {
    this.projectionfilmService.ajouter(this.projectionfilm)
      .subscribe(data => {
        this.projectionfilm = data;
        this.retrouverTout();
        this.projectionfilm.idProjectionFilm = 0;
        this.projectionfilm.dateProjection = null;
        this.projectionfilm.prix = 0;
      });
  }

  retrouverTout() {
    this.projectionfilmService.retrouverTout()
      .subscribe(data => {
        this.projectionfilms = data;
      });
  }

  retrouver(id: number) {
    this.projectionfilmService.retrouver(id)
      .subscribe(data => {
        this.projectionfilm = data;
      });
  }

  supprimer(id: number) {
    this.projectionfilmService.supprimer(id)
      .subscribe(data => this.ngOnInit());
  }

  modifier(id: number) {
    this.projectionfilmService.retrouver(id)
      .subscribe(data => {
        this.projectionfilm = data;
      });
  }
  detail(id: number) {
    this.projectionfilmService.retrouver(id)
      .subscribe(data => {
        this.projectionfilm = data;
      });
  }
  retrouverToutesSalles() {
    this.salleService.recupererTout()
      .subscribe(data => {
        this.salles = data
      })
  }
  getAllSeances() {
    this.seanceService.getAllSeances()
                       .subscribe(data => {
                         this.seances = data;
                       });
  }// end getAllSeances
  retrouverTousFilms() {
    this.filmService.recupererTout()
      .subscribe(data => {
        this.films = data;
      });
  }

}
