import React, { useEffect, useState } from 'react'
import { getProducts } from '../../services/productServices'
import './home.css'

import MainCard from '../../components/main-card/main-card'
import MainBanner from '../../components/main-banner/main-banner'
import MainTabLinks from '../../components/main-tab-links/main-tab-links'
import MainNavbar from '../../components/main-navbar/main-navbar'


const Home = () => {

    const [products, setProducts] = useState(null);

    useEffect(() => {
        getproductsData();
    },[]);

    useEffect(() => {
        console.log("Products",products)
    },[products]);

    const getproductsData = async () => {
        const data = await getProducts();
        setProducts(data);
    }
   
  
  return (
    <>
        <div className='main'>

            <MainNavbar />
    
            <div className='content'>

                <MainBanner />

                <MainTabLinks />

                <MainCard products={ products }/>
                
            </div>

        </div>
    </>
  )
}

export default Home;