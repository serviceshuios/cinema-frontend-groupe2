import { Component, OnInit } from '@angular/core';
import { Ticket } from '../models/ticket.model';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  // props

  // recupere le ticket saisie
  ticket: Ticket = {
    idTicket: 0,
    nomClient: '',
    prix: 0,
    codePayement: 0,
    reservee: true
  };
  // liste des tickets
  tickets;

  // ctor
  constructor(private ticketService: TicketService) { }

  // méthodes
  ngOnInit() {
    this.getAllTickets();
  }// end ngOnInit

  saveTicket() {
    // appel à la méthode de la couche service
    this.ticketService.addTicket(this.ticket)
                      // on s'inscrit pr suivre ce qui se passe (comme ds body d'un controller en java)
                       .subscribe(data => {
                         this.ticket = data;
                         this.getAllTickets();
                         this.ticket.idTicket = 0;
                         this.ticket.nomClient = '';
                         this.ticket.prix = 0;
                         this.ticket.codePayement = 0;
                         this.ticket.reservee = true;
                       });
  }// end saveTicket

  getAllTickets() {
    this.ticketService.getAllTickets()
                       .subscribe(data => {
                         this.tickets = data;
                       });
  }// end getAllTickets

  detailTicket(id: number) {
    this.ticketService.getTicket(id)
                       .subscribe( data => {
                        this.ticket = data;
                       });
  }// end detailTicket

  deleteTicket(id: number) {
    this.ticketService.deleteTicket(id)
                       .subscribe(data => {
                         // rappel de la fct d'initialisation
                         this.ngOnInit();
                       });
  }// end deleteTicket

}

