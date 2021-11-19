import React from 'react'

export const Card = (props) => {
    const {quantity=0,HandleBasketshow=Function.prototype}=props
    return (
        <div onClick={HandleBasketshow} className="cart blue darken-4 white-text">
              <i class="material-icons">add_shopping_cart</i>
              {quantity ? <span className="card-quantity">{quantity}  </span> :null}
            
        </div>
    )
}
