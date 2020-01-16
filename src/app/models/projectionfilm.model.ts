import { Film } from './film.model';
import { Salle } from './salle.model';
import { Seance } from './seance.model';

// modele ProjectionFilm pour pouvoir recup à partir de json
export class Projectionfilm {

    public idProjectionFilm: number;
    public dateProjection: Date ;
    public prix: number;
    film: Film;
    salle: Salle;
    seance: Seance; 

}// end classe
