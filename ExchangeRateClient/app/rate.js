import React from 'react';

const Rate = (props) => {
  return (
    <div className="rate">
      {props.currencies} - {props.rate}
    </div>
  );
}

export default Rate;
