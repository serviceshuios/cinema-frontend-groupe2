import { Component, OnInit } from '@angular/core';
import { Seance } from '../models/seance.model';
import { SeanceService } from '../services/seance.service';

@Component({
  selector: 'app-seance',
  templateUrl: './seance.component.html',
  styleUrls: ['./seance.component.css']
})
export class SeanceComponent implements OnInit {

  // props

  // recupere la seance saisie
  seance: Seance = {
    idSeance: 0,
    heureDebut : null
  };
  // liste des seances
  seances;

  // ctor
  constructor(private seanceService: SeanceService) { }

  // méthodes
  ngOnInit() {
    this.getAllSeances();
  }// end ngOnInit

  saveSeance() {
    // appel à la méthode de la couche service
    this.seanceService.addSeance(this.seance)
                      // on s'inscrit pr suivre ce qui se passe (comme ds body d'un controller en java)
                       .subscribe(data => {
                         this.seance = data;
                         this.getAllSeances();
                         this.seance.heureDebut = new Date();
                       });
  }// end saveSeance

  getAllSeances() {
    this.seanceService.getAllSeances()
                       .subscribe(data => {
                         this.seances = data;
                       });
  }// end getAllSeances

  detailSeance(id: number) {
    this.seanceService.getSeance(id)
                       .subscribe( data => {
                        this.seance = data;
                       });
  }// end detailSeance

  deleteSeance(id: number) {
    this.seanceService.deleteSeance(id)
                       .subscribe(data => {
                         // rappel de la fct d'initialisation
                         this.ngOnInit();
                       });
  }// end deleteSeance

}

