import React, { useState } from 'react'
import { postOffers } from '../../services/productPostOffersServices';
import useAuth from '../../hooks/useAuth';
import Button from '../button/button';
import Input from '../input/input'
import './offer-modal.css'

const OfferModal = ({ showModalOffer, productDetail }) => {
    const [offer, setOffer] = useState(0);

    // user data hooks.
    const { auth } = useAuth();

    //Kullanıcı id.
    const userId = auth.userId;

    // Verilen teklifi varsa yüzdesel hesaplama yoksa direkt input değerini yollayan fonksiyon.
    const giveOffer = () =>{
        if(offer===0){
            // teklif yüzdesi.
            const offerPercent =  document.querySelector('.messageCheckbox:checked').value;
            console.log("DEğer", offerPercent);
    
            const price = productDetail?.price;
    
            const offerPrice = price -  (price * (offerPercent/100));
            console.log("newPrice",offerPrice)
            showModalOffer(false)
            return offerPrice;
            
        }else {
            showModalOffer(false)
            return offer;
        }
    };
    
  return (
    <div className='modal'>
        <div className='main-content'>

        <div className='main-content_title'>
            <div className='main-content_title_header'>
                Teklif Ver
            </div>
            <div className='main-content_title_icon'>
               <Button title={'X'} onClick={() => showModalOffer(false)}/>
            </div>
        </div>

        <div className='main-content_information'>
            <div className='information-img'>
                <img src={`https://bootcamp.akbolat.net/${productDetail && productDetail?.image?.url}`}/>
            </div>
            <div className='information-title'>{ productDetail && productDetail?.name }</div>
            <div className='information-price'>{ productDetail && productDetail?.price } TL</div>
        </div>
        
       <div className='main-content-radio'>
        <label className='main-content_popup'>
            <input type="checkbox" value={20} name="hesap" class="messageCheckbox" />
            <span class="checkmark"></span> %20'si kadar teklif ver
        </label>
        <label className='main-content_popup'>
            <input type="checkbox" value={30} name="hesap" class="messageCheckbox" /> 
            <span class="checkmark"></span> %30'u kadar teklif ver
        </label>
        <label className='main-content_popup'>
            <input type="checkbox" value={40} name="hesap" class="messageCheckbox" />
            <span class="checkmark"></span> %40'ı kadar teklif ver
        </label>
       </div>
       
       <div className='main-content_input'>
           <Input placeholder={'Teklif Belirle'} onChange={(e) => console.log("teklif", setOffer(e.target.value))} />
       </div>
        <div className='main-content_btn'>
            <Button title={'Onayla'} onClick={() => postOffers(productDetail?.id, userId, giveOffer())}/>
        </div>
    </div>
   </div>
  )
}

export default OfferModal;