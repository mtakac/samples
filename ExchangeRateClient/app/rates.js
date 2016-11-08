import React from 'react';

import Rate from './rate';

const Rates = (props) => {
  return (
    <div className="rates">{renderRates(props.rates)}</div>
  );
};

const renderRates = (rates) => {
  return Object.keys(rates).map((key, index) => {
    return <Rate key={index} currencies={key} rate={rates[key]} />
  });
}

export default Rates;