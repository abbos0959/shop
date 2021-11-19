import React, { useState, useEffect } from 'react';
import { API_KEY } from '../config';
import { API_URL } from '../config';
import { GoodItem } from './GoodItem';
import { Goodlist } from '../component/GoodList';
import { Loader } from './Loader';
import { Card } from './Card';
import { Basketlist } from './Basketlist';
import { toast } from 'react-toastify';

export const Shoop = () => {
  const [goods, setgoods] = useState([]);
  const [loading, setloading] = useState(true);
  const [order, setorder] = useState([]);
  const [basketShow, setBasketshow] = useState(false);
  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setgoods(data.featured);
        setloading(false);
      });
  }, []);
  const HandleBasketshow = () => {
    setBasketshow(!basketShow);
    console.log(order);
  };
  const Handldelete = (id) => {
    const Neworder = order.filter((value) => value.id !== id);
    setorder(Neworder);
    toast.error('savatdagi mahsulot muvafaqqiyatli o`chirildi');
  };
  const increment = (id) => {
    const NewOrde = order.map((el) => {
      if (el.id === id) {
        const NewQuantity = el.quantity + 1;

        return {
          ...el,
          quantity: NewQuantity,
        };
      } else {
        return el;
      }
    });
    setorder(NewOrde);
  };

  const decrement = (id) => {
    const NewOrde = order.map((el) => {
      if (el.id === id && el.quantity > 0) {
        const NewQuantity = el.quantity - 1;

        return {
          ...el,
          quantity: NewQuantity,
        };
      } else {
        return el;
      }
    });
    setorder(NewOrde);
  };

  const AddtoBasket = (item) => {
    const ItemIndex = order.findIndex((Orderitem) => Orderitem.id === item.id);
    if (ItemIndex < 0) {
      const NewItem = {
        ...item,
        quantity: 1,
      };
      setorder([...order, NewItem]);
    } else {
      const NewOrder = order.map((Orderitem, index) => {
        if (index === ItemIndex) {
          return {
            ...Orderitem,
            quantity: Orderitem.quantity + 1,
          };
        } else {
          return Orderitem;
        }
      });
      setorder(NewOrder);

      
    }
    toast.success('savatga muvafaqqiyatli qo`shildi');
  };
  return (
    <div className="container content">
      <Card quantity={order.length} HandleBasketshow={HandleBasketshow} />

      {loading ? (
        <Loader />
      ) : (
        <Goodlist AddtoBasket={AddtoBasket} goods={goods} />
      )}
      {basketShow && (
        <Basketlist
          decrement={decrement}
          increment={increment}
          Handldelete={Handldelete}
          HandleBasketshow={HandleBasketshow}
          order={order}
        />
      )}
    </div>
  );
};
