import React from 'react';

import Rate from './rate';

const Rates = (props) => {
  return (
    <table className="table table-striped table-hover rates">
      <tbody>
        {renderRates(props.rates)}
      </tbody>  
    </table>
  );
};

const renderRates = (rates) => {
  return Object.keys(rates).map((key, index) => {
    return <Rate key={index} currencies={key} rate={rates[key]} />
  });
}

export default Rates;