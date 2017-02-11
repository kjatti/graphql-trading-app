import { Component } from '@angular/core';
import { TradeTicket } from "./app.ticket";
import { TradeService } from "./app.trade-service"

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
  private tradeService: TradeService = null;
  private currentSubId: number;
  private onTradeEvent: any;

  constructor() {
    var self = this;
    this.onTradeEvent = (err, result) => {
      if (err) {
        console.error(err);
      } else {
        console.log(result);
        self.gridData.push(result.tradeAdded);
      }
    }
  }

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



  public startSub() {
    if (!this.tradeService) {
      this.tradeService = new TradeService();
    }
    this.currentSubId = this.tradeService.subscribe(this.onTradeEvent)
  }
}
