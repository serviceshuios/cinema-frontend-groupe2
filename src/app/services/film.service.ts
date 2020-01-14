import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Film } from '../models/film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  public host = 'http://localhost:8090';

  constructor(private httpClient: HttpClient) { }

public recupererTout(): Observable<Film> {
return this.httpClient.get<Film>(this.host + '/films/');
}

public recuperer(id: number): Observable<Film> {
return this.httpClient.get<Film>(this.host + '/films/' + id);
}

public ajouter(film: Film) {
return this.httpClient.post<Film>(this.host + '/films/', film);
}

public supprimer(id: number) {
return this.httpClient.delete<Film>(this.host + '/films/' + id);
}
public modifier(id: number, film: Film) {
return this.httpClient.put<Film>(this.host + '/films/' + id, film);
}

}
