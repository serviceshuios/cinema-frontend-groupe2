import { Component, OnInit } from '@angular/core';
import { Salle } from '../models/salle.model';
import { SalleService } from '../services/salle.service';

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
  salles;

  constructor(private salleService: SalleService) { }

  ngOnInit() {
    this.retrouverTout();
  }
   saveSalle() {
    this.salleService.ajouter(this.salle)
      .subscribe(data => {
        this.salle = data
        this.retrouverTout();
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
