import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Ticket } from '../models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

// props
  // url - de notre projet
  public host = 'http://localhost:8090';

  // ctor
  constructor(private httpClient: HttpClient) { }

  // méthodes
  public getAllTickets(): Observable<Ticket> {
    return this.httpClient.get<Ticket>(this.host + '/tickets/');
  }// end getAllTickets

  public getTicket(id: number): Observable<Ticket> {
    return this.httpClient.get<Ticket>(this.host + '/tickets/' + id);
  }// end getTicket

  public addTicket(ticket: Ticket) {
    return this.httpClient.post<Ticket>(this.host + '/tickets/', ticket);
  }// end addTicket

  public deleteTicket(id: number) {
    return this.httpClient.delete<Ticket>(this.host + '/tickets/' + id);
  }// end deleteTicket

  public updateTicket(id: number, ticket: Ticket) {
    return this.httpClient.put<Ticket>(this.host + '/tickets/' + id, ticket);
  }// end updateTicket

}// end class