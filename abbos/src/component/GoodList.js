import React from 'react'
import { GoodItem } from './GoodItem';


export const Goodlist = (props) => {
    const { goods = [],AddtoBasket } =props
    if(!goods.length){
        return <h2>Nothing here</h2>
    }
    return (
        <div className="goods">
            {goods.map(item=>(
                <GoodItem  AddtoBasket={AddtoBasket} key={item.id} {...item} />
            ))}
            
        </div>
    )
}
