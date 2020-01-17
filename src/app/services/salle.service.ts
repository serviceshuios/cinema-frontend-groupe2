import { Injectable } from '@angular/core';
import { Salle } from '../models/salle.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalleService {

  public host = 'http://localhost:8090';

  constructor(private httpClient: HttpClient) { }

  public recupererTout(): Observable<Salle> {
    return this.httpClient.get<Salle>(this.host + '/salles/');
  }

  public recuperer(id: number): Observable<Salle> {
    return this.httpClient.get<Salle>(this.host + '/salles/' + id);
  }

  public ajouter(salle: Salle) {
    return this.httpClient.post<Salle>(this.host + '/salles/', salle);
  }

  public supprimer(id: number) {
    return this.httpClient.delete<Salle>(this.host + '/salles/' + id);
  }

  public modifier(id: number, salle: Salle) {
    return this.httpClient.put<Salle>(this.host + '/salles/' + id, Salle);
  }

  public recupererSalles(id: number): Observable<Salle> {
    return this.httpClient.get<Salle>(this.host + '/cinemas/' + id + '/salles');
  }
}
