import { Component, OnInit } from '@angular/core';
import { Film } from '../models/film.model';
import { FilmService } from '../services/film.service';
import { CategorieService } from '../services/categorie.service';



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
 realisateur: '',
 categorie: null,

  };

  // liste des films
  films;

  // liste de categories
  categories;



  constructor(private filmService: FilmService, private categorieService: CategorieService) { }



  ngOnInit() {
    this.retrouverTout();
    this.getAllCategories();
  }


  savefilm() {
    this.filmService.ajouter(this.film)
      .subscribe(data => {
        this.film = data;
        this.retrouverTout();
        this.getAllCategories();
        this.film.idFilm = 0;
        this.film.photo = '' ;
        this.film.duree = 0;
        this.film.description = '' ;
        this.film.dateSortie = new Date();
        this.film.realisateur = '';
        this.film.titre = '';
        this.film.categorie = null;
        this.film.categorie.idCategorie = 0;


      });
  }

  retrouverTout() {
    this.filmService.recupererTout()
      .subscribe(data => {
        this.films = data;
      });
  }

  retrouver(id: number) {
    this.filmService.recuperer(id)
      .subscribe(data => {
        this.film = data;
      });
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
});
}
 getAllCategories() {
    this.categorieService.getAllCategories()
                       .subscribe(data => {
                         this.categories = data;
                       });
  }// end getAllCategories

}
