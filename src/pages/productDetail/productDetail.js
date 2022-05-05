import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Button from '../../components/button/button'
import BuyModal from '../../components/buy-modal/buyModal'
import MainNavbar from '../../components/main-navbar/main-navbar'
import OfferModal from '../../components/offer-modal/offer-modal'
import useAuth from '../../hooks/useAuth'

import { getProductsId } from '../../services/productServices'
import './productDetail.css'

const ProductDetail = () => {

  const [productDetail, setProductDetail] = useState(null);

  const [showModalBuy, setShowModalBuy] = useState(false);
  const [showModalOffer, setShowModalOffer] = useState(false);

  const [status, setStatus] = useState(false);
  const [offerPrice, setOfferPrice] = useState(0);
  const [offer, setOffer] = useState([]);

  const [searchParams] = useSearchParams();

  const { auth } = useAuth();
  
  // requesteki id yi yakalar.
  let productId = searchParams.get('id');

  useEffect(() => {
    getProductDetailData(productId);
   
  },[]);

  useEffect(() => {
   console.log("Products Detail",offer)
   findOffer();
  },[productDetail]);
  

  // Ürün detaylarını ürün idsine göre getiren fonksiyon.
  const getProductDetailData = async (id) => {
    const data = await getProductsId(id);
    setOffer(data.offers)
    setProductDetail(data);
  }

  // ürüne ait kullanıcı tarafından teklif var mı yok mu?
    const findOffer = () => {
        offer && offer?.map((e) => {
            if(e.users_permissions_user === auth.userId){
                setStatus(true)
                setOfferPrice(e.offerPrice)
                console.log("Var kullanıcı",e.users_permissions_user)
            } else {
                console.log("yok")
            }
    })
  }

    return (
    <>
    	<MainNavbar />
     
    	<div className="detail-content">

            <div className="detail-content_img">
                <img src={`https://bootcamp.akbolat.net/${productDetail && productDetail?.image?.url}`}/>
            </div>

            <div className="detail-content_info">

                <div className="detail-content_info_title">
                    {productDetail && productDetail?.name}
                </div>

                <div className="detail-content_info_brand">
                    Marka: <span className="info-text ">{productDetail && productDetail?.brand}</span>
                </div>
            
                <div className="detail-content_info_color">
                    Renk: <span className="info-text ">{productDetail && productDetail?.color}</span>
                </div>

                <div className="detail-content_info_status">
                    Durum: <span className="info-text ">{productDetail && productDetail?.status}</span>
                </div>

                <div className="detail-content_info_price">
                    {productDetail && productDetail?.price} TL
                </div>

            {
                status === true ?
                (
                    <div className='detail-content_find-offer'>
                    <span>Verilen Teklif:</span>{offerPrice} TL</div>
                )
                :
                (!productDetail?.isSold ?	
                    <div className="detail-content_info_buttons">
                        <Button id={"buy"} title={"Satın Al"} onClick={() => setShowModalBuy(true)}/>

                        {
                          productDetail?.isOfferable && 
                          <Button id={"offer"} title={"Teklif Ver"} onClick={() => setShowModalOffer(true)} />
                        }
                    </div> 
                : 	
                    <Button id={'noSalles'} title={'Bu Ürün Satışta Değil'}/>
                )
            }
            
                <div className="detail-content_info_explanation">
                    Açıklama
                    <p>{productDetail && productDetail?.description}</p>
                </div>
        </div>
            
    	</div>
				
		{ showModalBuy && <BuyModal showModalBuy={ setShowModalBuy } productId={productId} productDetail={productDetail} /> }
		{ showModalOffer && <OfferModal showModalOffer={ setShowModalOffer } productDetail={productDetail} />}
    </>
   
  )
}

export default ProductDetail;