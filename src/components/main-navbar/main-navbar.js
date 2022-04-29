import React from 'react'
import ProductAddIcon from '../../assets/productAdd.svg'
import HomeIcon from '../../assets/home.svg'
import LogoIcon from '../../assets/logo.svg'
import './main-navbar.css'

const MainNavbar = () => {
  return (
    <>
        <header className='main-navbar'>
                <div className='navbar'>
                    <div className='brand-icon'>
                        <img src={LogoIcon} alt='Logo'/>
                    </div>
                    <nav>
                        <ul>
                            <li> 
                            <button> 
                                <img className='svg-icon' src={ProductAddIcon}></img>
                                Ürün Ekle
                            </button> 
                            </li>
                            <li> 
                            <button>
                                <img className='svg-icon' src={HomeIcon}></img>
                                Giriş Yap
                            </button> 
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
    </>
  )
}

export default MainNavbar