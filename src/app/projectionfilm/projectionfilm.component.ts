import { Component, OnInit } from '@angular/core';
import { Projectionfilm } from '../models/projectionfilm.model';
import { ProjectionfilmService } from '../services/projectionfilm.service';

@Component({
  selector: 'app-projectionfilm',
  templateUrl: './projectionfilm.component.html',
  styleUrls: ['./projectionfilm.component.css']
})
export class ProjectionfilmComponent implements OnInit {

  projectionfilm: Projectionfilm = {

    idProjectionFilm: 0,
    dateProjection: null,
    prix: 0

  };
  // liste des projectionfilms
  projectionfilms;

  constructor(private projectionfilmService: ProjectionfilmService) { }

  ngOnInit() {
    this.retrouverTout();
  }

  saveProjectionfilm() {
    this.projectionfilmService.ajouter(this.projectionfilm)
      .subscribe(data => {
        this.projectionfilm = data;
        this.retrouverTout();
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

}
