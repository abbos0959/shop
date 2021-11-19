import React from 'react'

export const GoodItem = (props) => {
    const {id,name,description,price,full_background ,AddtoBasket}=props
    return (
        <div className="card" id={id}>
            <div className="card-image">
                <img src={full_background} alt={name}></img>
                

            </div>
            <div className="card-content">
            <span className="card-title">{name} </span>
         <p>{description}</p>

            </div>
            <div className="card-action">
                <button onClick={()=>AddtoBasket({id,name,price})} className="btn">Buy</button>
                <span className="right" style={{fontSize:"1.8rem"}}>{price}$ </span>
            </div>
            
        </div>
    )
}
