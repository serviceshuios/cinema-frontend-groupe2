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
return this.httpClient.get<Projectionfilm>(this.host + '/projectionfilms');
}

public retrouver(id: number): Observable<Projectionfilm> {
return this.httpClient.get<Projectionfilm>(this.host + '/projectionfilms/' + id);
}

public ajouter(projectionfilm: Projectionfilm) {
return this.httpClient.post<Projectionfilm>(this.host + '/projectionfilms/', projectionfilm);
}

public supprimer(id: number) {
return this.httpClient.delete<Projectionfilm>(this.host + '/projectionfilms/' + id);
}

public modifier(id: number, projectionfilm: Projectionfilm) {
return this.httpClient.put<Projectionfilm>(this.host + '/projectionfilms/' + id, projectionfilm);
}


}
