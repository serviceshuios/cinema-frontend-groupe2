import { Component, OnInit } from '@angular/core';
import { Places } from '../models/places.model';
import { PlacesService } from '../services/places.service';
import { Salle } from '../models/salle.model';
import { SalleService } from '../services/salle.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

place: Places = {

idPlace: 0,
numero: 0,
 latitude: 0,
 altitude: 0,
 longitude: 0,
 salle: null,
  };
  places; salles;

  constructor(private placesService: PlacesService, private salleService: SalleService) { }


   ngOnInit() {
    this.retrouverTout();
    this.retrouverToutSalle();
  }

  saveplaces() {
    this.placesService.ajouter(this.place)
      .subscribe(data => {
        this.place = data;
        this.retrouverTout();
        this.retrouverToutSalle();
        this.place.altitude = 0;
        this.place.latitude = 0;
        this.place.idPlace = 0;
        this.place.longitude = 0;
        this.place.numero = 0;
        this.place.salle = null;

      });
  }

  retrouverTout() {
    this.placesService.retrouverTout()
      .subscribe(data => {
        this.places = data;
      });
  }

  retrouverToutSalle() {
    this.salleService.recupererTout()
      .subscribe(data => {
        this.salles = data
      })
  }

  retrouver(id: number) {
    this.placesService.retrouver(id)
      .subscribe(data => {
        this.place = data;
      });
  }

  supprimer(id: number) {
    this.placesService.supprimer(id)
      .subscribe(data => this.ngOnInit());
  }

 modifier(id: number) {
    this.placesService.retrouver(id)
                       .subscribe( data => {
                        this.place = data;
                       });
  }
  detail(id: number) {
this.placesService.retrouver(id)
.subscribe(data => {
this.place = data;
});
}

}
