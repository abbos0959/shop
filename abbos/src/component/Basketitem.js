import React from 'react';

export const Basketitem = (props) => {
  const { id, name, quantity, price, Handldelete, increment, decrement } =
    props;
  return (
    <li className="collection-item">
      {name} <b>X</b> {quantity} = {quantity * price}
      <a onClick={() => increment(id)} className="waves-effect waves-light btn">
        <i className="material-icons left">exposure_plus_1</i>
      </a>
      <a onClick={()=>decrement(id)} className="waves-effect waves-light btn">
        <i className="material-icons left">exposure_minus_1</i>
      </a>
      <span className="secondary-content">
        <i
          onClick={() => Handldelete(id)}
          className="material-icons basket-delete"
        >
          delete_forever
        </i>
      </span>
    </li>
  );
};
