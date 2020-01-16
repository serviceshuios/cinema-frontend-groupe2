import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cinema} from '../models/cinema.model'

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  public host = 'http://localhost:8090';

  constructor(private httpClient: HttpClient) { }

  
public retrouverTout(): Observable<Cinema> {
return this.httpClient.get<Cinema>(this.host + '/cinemas/')
}

public retrouver(id: number): Observable<Cinema> {
return this.httpClient.get<Cinema>(this.host + '/cinemas/' + id);
}

public saveCinema(cinema: Cinema) {
return this.httpClient.post<Cinema>(this.host + '/cinemas/', cinema);
}

public supprimer(id: number) {
return this.httpClient.delete<Cinema>(this.host + '/cinemas/' + id);
}

public modifier(id: number, cinema: Cinema) {
return this.httpClient.put<Cinema>(this.host + '/cinemas/' + id, cinema);
}



}
