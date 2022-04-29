import React from 'react'
import './main-card.css'

const MainCard = ({ brand, color, price, url }) => {
  return (
   <>
        <div className="main-card_content">

            <div className="main-card_content_img">
                <img src={`https://bootcamp.akbolat.net/${url}`}/>
            </div>

            <div className="main-card_content_prodcut">
                <p> {brand} </p>
                <p> Renk: {color} </p>
            </div>

            <div className="main-card_content_price">
                <span> {price} TL </span>
            </div>
                
        </div>   
   </>
  )
}

export default MainCard;