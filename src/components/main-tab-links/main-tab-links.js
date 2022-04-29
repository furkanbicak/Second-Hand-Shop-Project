import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getCategories } from '../../services/productServices';
import './main-tab-links.css'

const MainTabLinks = () => {

    const [categories, setCategories] = useState(null);

    useEffect(() => {
        getCategoriesData();
    },[]);

    useEffect(() => {
    console.log("A",categories)
    },[categories]);

    const getCategoriesData = async () => {
    const data = await getCategories();
    setCategories(data);
  }

  return (
   <>
        <div className="main-tab-links">
            <ul>
                {
                    categories && categories?.map((item,index) => {
                        return(
                            <li>
                                <NavLink to={`/category/${item.id}`}>{item.name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
   </>
  )
}

export default MainTabLinks;