import { Component, OnInit } from '@angular/core';
import { Ville } from '../models/ville.model';
import { VilleService } from '../services/ville.service';

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.css']
})
export class VilleComponent implements OnInit {
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

  saveville() {
    this.villeService.ajouter(this.ville)
      .subscribe(data => {
        this.ville = data
        this.retrouverTout();
        this.ville.altitude = 0;
        this.ville.latitude = 0;
        this.ville.id = 0;
        this.ville.longitude = 0;
        this.ville.name = '';

      });
  }

  retrouverTout() {
    this.villeService.recupererTout()
      .subscribe(data => {
        this.villes = data
      })
  }

  retrouver(id: number) {
    this.villeService.recuperer(id)
      .subscribe(data => {
        this.ville = data;
      })
  }

  supprimer(id: number) {
    this.villeService.supprimer(id)
      .subscribe(data => this.ngOnInit());
  }

 modifier(id: number) {
    this.villeService.recuperer(id)
                       .subscribe( data => {
                        this.ville = data;
                       });
  }
  detail(id: number) {
this.villeService.recuperer(id)
.subscribe(data => {
this.ville = data;
})
}

}
