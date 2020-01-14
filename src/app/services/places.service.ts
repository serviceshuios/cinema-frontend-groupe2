import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Places} from '../models/places.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public host = 'http://localhost:8090';

  constructor(private httpClient: HttpClient) { }


public retrouverTout(): Observable<Places> {
return this.httpClient.get<Places>(this.host + '/places');
}

public retrouver(id: number): Observable<Places> {
return this.httpClient.get<Places>(this.host + '/places/' + id);
}

public ajouter(place: Places) {
return this.httpClient.post<Places>(this.host + '/places/', place);
}

public supprimer(id: number) {
return this.httpClient.delete<Places>(this.host + '/places/' + id);
}

public modifier(id: number, place: Places) {
return this.httpClient.put<Places>(this.host + '/places/' + id, place);
}



}
