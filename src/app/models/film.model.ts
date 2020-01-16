import { Categorie } from './categorie.model';

export class Film {
     idFilm: number;
	 titre: string;
	 duree: number;
	realisateur: string;
	description: string;
	photo: string;
	dateSortie: Date;
	categorie: Categorie;

}