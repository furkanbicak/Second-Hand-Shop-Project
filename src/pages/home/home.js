import React, { useEffect, useState } from 'react'
import { getProducts } from '../../services/productServices'
import './home.css'

import MainCard from '../../components/main-card/main-card'
import MainBanner from '../../components/main-banner/main-banner'
import MainTabLinks from '../../components/main-tab-links/main-tab-links'
import MainNavbar from '../../components/main-navbar/main-navbar'
import { Link } from 'react-router-dom'


const Home = () => {

  const [categories, setCategories] = useState(null);

  useEffect(() => {
    getCategoriesData();
  },[]);

  useEffect(() => {
   console.log("Products",categories)
  },[categories]);

  const getCategoriesData = async () => {
    const data = await getProducts();
    setCategories(data);
  }
  
  return (
    <>
        <div className='main'>

            <MainNavbar />
    
            <div className='content'>

                <MainBanner />

                <MainTabLinks 
                    categories  =   { categories }
                />

                <div className = 'main-card'>
                    {
                        categories?.map((item, index) => 
                        {
                            return(
                                <Link style={{ textDecoration: 'none' }} to={ `/productDetail?id=${item.id}` }>
                                    <MainCard 
                                        key     =   {index} 
                                        brand   =   {item.brand} 
                                        color   =   {item.color} 
                                        price   =   {item.price} 
                                        url     =   {item?.image?.url}
                                    /> 
                              </Link>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    </>
  )
}

export default Home;