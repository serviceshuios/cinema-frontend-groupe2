import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Ville } from '../models/ville.model';

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  public host = 'http://localhost:8090';

  constructor(private httpClient: HttpClient) { }

public recupererTout(): Observable<Ville> {
return this.httpClient.get<Ville>(this.host + '/villes/');
}

public recuperer(id: number): Observable<Ville> {
return this.httpClient.get<Ville>(this.host + '/villes/' + id);
}

public ajouter(ville: Ville) {
return this.httpClient.post<Ville>(this.host + '/villes/', ville);
}

public supprimer(id: number) {
return this.httpClient.delete<Ville>(this.host + '/villes/' + id);
}

public modifier(id: number, ville: Ville) {
return this.httpClient.put<Ville>(this.host + '/villes/' + id, ville);
}
}
