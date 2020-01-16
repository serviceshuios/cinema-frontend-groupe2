import { Component, OnInit } from '@angular/core';
import { Categorie } from '../models/categorie.model';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  // props

  // recupere la categorie saisie
  categorie: Categorie = {
    idCategorie: 0,
    name: ''
  };
  // liste des categories
  categories;

  // ctor
  constructor(private categorieService: CategorieService) { }

  // méthodes
  ngOnInit() {
    this.getAllCategories();
  }// end ngOnInit

  saveCategorie() {
    // appel à la méthode de la couche service
    this.categorieService.addCategorie(this.categorie)
                      // on s'inscrit pr suivre ce qui se passe (comme ds body d'un controller en java)
                       .subscribe(data => {
                         this.categorie = data;
                         this.getAllCategories();
                         this.categorie.idCategorie = 0;
                         this.categorie.name = '';
                       });
  }// end saveCategorie

  getAllCategories() {
    this.categorieService.getAllCategories()
                       .subscribe(data => {
                         this.categories = data;
                       });
  }// end getAllCategories

  detailCategorie(id: number) {
    this.categorieService.getCategorie(id)
                       .subscribe( data => {
                        this.categorie = data;
                       });
  }// end detailCategorie

  deleteCategorie(id: number) {
    this.categorieService.deleteCategorie(id)
                       .subscribe(data => {
                         // rappel de la fct d'initialisation
                         this.ngOnInit();
                       });
  }// end deleteCategorie

}
