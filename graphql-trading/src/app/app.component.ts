import { Component } from '@angular/core';
import { TradeTicket } from "./app.ticket"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title = "GraphQL Trader!";
  private ticketOpened = false;
  private currentTicket = null;
  private securityList: [string] = ['AAPL', "FB", "IBM"];

  private gridData: any[] = [
    {
      id: 1,
      symbol: "IBM",
      action: "Buy",
      amount: 100
    },

    {
      id: 2,
      symbol: "AAPL",
      action: "Sell",
      amount: 200
    }
  ];

  private openTicket() {
    this.ticketOpened = true;
    this.currentTicket = new TradeTicket();
  }

  private closeTicket() {
    this.ticketOpened = false;
  }

  private addTrade() {
    alert('Adding: ' + this.currentTicket.symbol);
  }
}
