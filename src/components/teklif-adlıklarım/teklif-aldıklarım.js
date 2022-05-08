import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { getUserProducts } from '../../services/productOfferServices';
import MainNavbar from '../main-navbar/main-navbar'
import OfferCard from '../offer-card/offer-card'

const TeklifAldıklarım = () => {

  const [productsData, setProductsData] = useState(null);
  const [offer, setOffer] = useState(null);

  const { auth } = useAuth();
  
  let offerData;

  useEffect(() => {
      getmyProducts()
      findProductOffers()
  },[])
  
  useEffect(() => {
     findProductOffers()
     offerData = mergeOffersProducts()
     setOffer(offerData)
  },[productsData]);

  //? id = 15 olan kişinin ürünlerini getirdi.
  const getmyProducts = async () => {
      const data = await getUserProducts(auth.userId);
      setProductsData(data);
  }


  //? ürünlerdeki tekliflerin id alıp arr kaydet.
  const findProductOffers = () => {
      let arr = [];
      productsData?.forEach(product => {
          if(product?.offers){
              product.offers.forEach(offer => {
                  arr.push(offer);
              });
          } 
      });
      return arr;
  }

  const  mergeOffersProducts = () => {
      let arr2 = [];
      const tmp = findProductOffers();
      tmp.map((offer) => {
          productsData.find((product) => {
            
              if(offer.product === product.id) {
                  arr2.push({
                      ...offer, 
                      name:product.name,
                      id:product.id,
                      isSold:product.isSold,
                      url:product.image.url
                  })
              }
          })
      })
      return arr2;
  }

  return (
      <>
        <MainNavbar />
        <OfferCard offer={offer} />

      </>
  )
}

export default TeklifAldıklarım;