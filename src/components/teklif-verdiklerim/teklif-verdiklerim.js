import React, { useEffect, useState } from 'react'
import { getUserOffers } from '../../services/productOfferServices';
import MainNavbar from '../main-navbar/main-navbar';
import OfferCard from '../offer-card/offer-card';

const TeklifVerdiklerim = () => {
    const [offersData, setOffersData] = useState(null);
    const [productsData, setProductsData] = useState(null);
    
    useEffect(() => {
        getmyOffers()
       
        
    },[])
    
    useEffect(() => {
       console.log("Offer:", offersData)
       console.log("DAA:", productsData)
       getMyProducts()
      
    },[offersData]);
  
    //? id = 15 olan kişinin tekliflerini getirdi.
    const getmyOffers = async () => {
        const data = await getUserOffers(15);
        setOffersData(data);
    }

    //? ürünler ayıklandı.
    const getMyProducts = () => {
        let arr = [];
        offersData?.map((item) => {
            arr.push(item.product)
           setProductsData(arr)
        })
        return arr;
    }

   

    return (
        <>
            <MainNavbar />
            <OfferCard offer={offersData} />

        </>
    )
}

export default TeklifVerdiklerim;