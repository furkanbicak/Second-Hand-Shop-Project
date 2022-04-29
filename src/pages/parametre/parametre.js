import React, { useEffect, useState } from 'react'
import MainBanner from '../../components/main-banner/main-banner';
import MainCard from '../../components/main-card/main-card';
import MainNavbar from '../../components/main-navbar/main-navbar';
import MainTabLinks from '../../components/main-tab-links/main-tab-links';
import { useParams } from 'react-router-dom';
import { getCategories } from '../../services/productServices';

const Parametre = () => {
    const parameter = useParams().id
    console.log("Parametre",parameter)

    const [data, setData] = useState(null);

    useEffect(() => {
        getCategoriesData();
    },[parameter]);

    useEffect(() => {
    console.log("Data",data)
    },[data]);

    const getCategoriesData = async () => {
    const data = await getCategories();
    setData(data[parameter-1].products);
  }
  return (
    <>
      <div className='main'>
           <MainNavbar />
    
            <div className='content'>
                <MainBanner />

                <MainTabLinks />

                <div className="main-card">
                    {
                        data?.map((item, index) => {
                            return(
                                <MainCard brand={item.brand} color={item.color} price={item.price} url={item.image.url} />
                            )
                        })
                    }
                </div>
               
                
            </div>

        </div>
    </>
  )
}

export default Parametre;