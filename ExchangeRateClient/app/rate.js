import React from 'react';

const Rate = (props) => {
  return (
    <tr className="rate">
      <td>{props.currencies}</td>
      <td>{Number(props.rate).toFixed(3)}</td>
    </tr>
  );
}

export default Rate;
