import React from 'react';
import { Basketitem } from '../component/Basketitem';

export const Basketlist = (props) => {
  const { order,Handldelete  ,increment,decrement} = props;

 

const totalPrice=
  order.reduce((sum,el)=>{
     return  sum+el.quantity*el.price
     
  },0)

  return (
    <ul className="collection  basket-list">
      <li className="collection-item active"> Basket</li>


{order.length ? order.map(item=>{return(
    <Basketitem decrement={decrement} increment={increment} Handldelete={Handldelete} key={item.id} {...item} />)
}) : <li className="collection-item"> Hozircha savat bo`sh</li>}

      <li className="collection-item active"> Total Price {totalPrice}</li>
      
      <i className="material-icons basket-close" onClick={props.HandleBasketshow}> close</i>
    </ul>
  );
};
