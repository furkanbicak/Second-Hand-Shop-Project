import React from 'react'


import { putSoldProduct } from '../../services/productDetailServices';
import Button from '../button/button';
import './buyModal.css'

const BuyModal = ({ showModalBuy, productId, productDetail,  }) => {
    
    // Modal Satınl Al senaryosu.
    const buyShoping = () => {
        // Ürünün güncel satış durumunu getir (true-false).
        const status = productDetail?.isSold;

        //getProductSold da yolla.
        putSoldProduct(productId, status);
        
        //Modal Kapat her şey bitti.
        showModalBuy(false);
    }

  return (
   <div className='modal'>
        <div className='main-conten'>
            <div className='main-content_title'>
                Satın Al
            </div>
            <div className='main-content_sure'>
                Satın Almak İstiyor musunuz?
            </div>
            <div className='main-content_btn'>
                <Button 
                    id={'cancel'} 
                    title={'Vazgeç'}
                    onClick={() => showModalBuy(false)}  
                />
                <Button 
                    id={'ok'} 
                    title={'Satın Al'}
                    onClick={() => buyShoping()} 
                />
            </div>
        </div>
   </div>
  )
}

export default BuyModal;