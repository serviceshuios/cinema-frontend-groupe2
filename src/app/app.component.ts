import { Component } from '@angular/core';
import { VilleService } from './services/ville.service';
import { Ville } from './models/ville.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],


})

export class AppComponent {
  title = 'cinema-frontend-groupe2';
  ville: Ville = {

    id: 0,
    name: '',
    latitude: 0,
    altitude: 0,
    longitude: 0,

  };
  // liste des villes
  villes;

  constructor(private villeService: VilleService) { }



  ngOnInit() {
    this.retrouverTout();
  }

  retrouverTout() {
    this.villeService.recupererTout()
      .subscribe(data => {
        this.villes = data;
      });
  }
}
