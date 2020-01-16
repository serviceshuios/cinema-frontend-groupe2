import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Seance } from '../models/seance.model';

@Injectable({
  providedIn: 'root'
})
export class SeanceService {

  // props
  // url - de notre projet
  public host = 'http://localhost:8090';

  // ctor
  constructor(private httpClient: HttpClient) { }

  // méthodes
  public getAllSeances(): Observable<Seance> {
    return this.httpClient.get<Seance>(this.host + '/seances/');
  }// end getAllSeances

  public getSeance(id: number): Observable<Seance> {
    return this.httpClient.get<Seance>(this.host + '/seances/' + id);
  }// end getSeance

  public addSeance(seance: Seance) {
    return this.httpClient.post<Seance>(this.host + '/seances/', seance);
  }// end addSeance

  public deleteSeance(id: number) {
    return this.httpClient.delete<Seance>(this.host + '/seances/' + id);
  }// end deleteSeance

  public updateSeance(id: number, seance: Seance) {
    return this.httpClient.put<Seance>(this.host + '/seances/' + id, seance);
  }// end updateSeance


}// end classe
