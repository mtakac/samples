import { endpoint, interval } from './config';
import startRatePolling from './startRatePolling';
import React, {Component} from 'react';
import jsonp from 'jsonp';

import Navbar from './navbar';
import Rates from './rates';

class App extends Component {
  constructor() {
    super();
    this.loadRates = this.loadRates.bind(this);

    this.state = {
      rates: {}
    };
  }

  componentWillMount() {
    this.loadRates();
  }

  componentDidMount() {
    const intervalId = setInterval(this.loadRates, interval);
    this.setState({intervalId});
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  loadRates() {
    return jsonp(endpoint, null, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({rates: data.rates});
      }
    });
  }

  render() {
    return (
      <div className="app">
        <Navbar title="Random Ticker" />

        <div className="container">
          <h1>Currency rates</h1>
          <Rates rates={this.state.rates} />
        </div>
      </div>
    );
  }
}

export default App;
