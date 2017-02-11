import { ConnectionParams, SubscriptionClient } from 'subscriptions-transport-ws';


export class TradeService {

    private wsClient: SubscriptionClient;

    constructor() {

        // Create WebSocket client 
        this.wsClient = new SubscriptionClient(`ws://colossus.graphql.tk:5000/`, {
            reconnect: true,
            connectionParams: {
                // Pass any arguments you want for initialization 
            }

        });
    }

    public subscribe(callback: any) {
        const query = `
   subscription TradesSubscription {
     tradeAdded {
       id
       action
       symbol
       amount
     }
   }
   `;
        const variables = null;
        return this.wsClient.subscribe(
            {
                query,
                variables
            },
            callback
        )
    }

    public unsubscribe(id) {
        this.wsClient.unsubscribe(id);
    }
}


