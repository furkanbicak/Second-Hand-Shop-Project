import React from 'react'

const AccountMainCard = ({offer}) => {
    return(
        <>
        { 
            offer && offer?.map((item) => (
            <div className="account-main_card" >
                <div style={{display: "flex"}}>
                    <img src={`https://bootcamp.akbolat.net/${item.url || item?.product?.image?.url}`}/>
                    <div className="detay">
                        <span id="title"> {item.name || item?.product?.name} </span>
                        <span id="price"> Verilen Teklif: {item.offerPrice} TL</span>
                    </div>
                </div>

                <div style={{margin: "40px", color: "#1aad10"}}>
                    Satıldı
                </div> 
                
            </div>
            ))
        }
        </>
    );  
   
}

export default AccountMainCard;