import { Component, OnInit } from '@angular/core';
import { Seance } from '../models/seance.model';
import { SeanceService } from '../services/seance.service';

@Component({
  selector: 'app-seance',
  templateUrl: './seance.component.html',
  styleUrls: ['./seance.component.css']
})
export class SeanceComponent implements OnInit {

  // props HAHA HOHO

  heure: string;
  minute: string;

  // permet de recuperer le time from html
  horaire: string;
  // permet la modif de horaire pr avoir le bon time
  trueHoraire: string;

  // recupere la seance saisie
  seance: Seance = {
    idSeance: 0,
    heureDebut : null
  };
  // liste des seances
  seances;

  // pr modif
  test: string;
  retest: string;
  modiftest: string;

  // ctor
  constructor(private seanceService: SeanceService) { }

  // méthodes
  ngOnInit() {
    this.getAllSeances();
  }// end ngOnInit

  saveSeance() {
    // modif de horaire via trueHoraire
    this.trueHoraire =  Number(this.horaire.substr(0, this.horaire.length - 3)) - 1 + this.horaire.substr(2, this.horaire.length);
    // injection de cette trueHoraire dans seance
    this.seance.heureDebut = new Date('01 Jan 1970 ' + this.trueHoraire + ' GMT');
    // appel à la méthode de la couche service
    this.seanceService.addSeance(this.seance)
                      // on s'inscrit pr suivre ce qui se passe (comme ds body d'un controller en java)
                       .subscribe(data => {
                        //  this.seance.heureDebut = new Date(2000, 10, 11, 10, 12, 42, 11);
                         this.seance = data;
                         this.getAllSeances();
                         this.seance.idSeance = 0;
                         this.seance.heureDebut = null;
                         this.horaire = '';
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
                        this.test = this.seance.heureDebut.toString();
                        this.retest = this.test.substr(11, this.test.length - 23);
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

