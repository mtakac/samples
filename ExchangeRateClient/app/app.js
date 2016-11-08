import { endpoint, interval } from './config';
import startRatePolling from './startRatePolling';
import React, {Component} from 'react';

import Rates from './rates';

const rates = {
  "rates": {
    "EUR/USD": 0.994,
    "GBP/USD": 0.997,
    "USD/JPY": 1.246,
    "EUR/GBP": 0.997,
    "EUR/JPY": 0.776
  }
};

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Currency rates</h1>
        <Rates rates={rates['rates']} />
      </div>
    );
  }
}

export default App;

