import React from 'react'
import Banner from '../../assets/banner.png'
import './main-banner.css'

const MainBanner = () => {
  return (
    <>
        <div className='main-banner'>
            <img src={Banner} />
        </div>
    </>
  )
}

export default MainBanner