import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projectionfilm } from '../models/projectionfilm.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectionfilmService {

  public host = 'http://localhost:8090';

  constructor(private httpClient: HttpClient) { }


public retrouverTout(): Observable<Projectionfilm> {
return this.httpClient.get<Projectionfilm>(this.host + '/projectionFilms');
}

public retrouver(id: number): Observable<Projectionfilm> {
return this.httpClient.get<Projectionfilm>(this.host + '/projectionFilms/' + id);
}

public ajouter(projectionfilm: Projectionfilm) {
return this.httpClient.post<Projectionfilm>(this.host + '/projectionFilms/', projectionfilm);
}

public supprimer(id: number) {
return this.httpClient.delete<Projectionfilm>(this.host + '/projectionFilms/' + id);
}

public modifier(id: number, projectionfilm: Projectionfilm) {
return this.httpClient.put<Projectionfilm>(this.host + '/projectionFilms/' + id, projectionfilm);
}


}
