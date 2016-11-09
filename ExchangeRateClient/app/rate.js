import React from 'react';

const Rate = (props) => {
  return (
    <div className="rate">
      {props.currencies} - {Number(props.rate).toFixed(3)}
    </div>
  );
}

export default Rate;
