import React from 'react'
import ProductAddIcon from '../../assets/productAdd.svg'
import HomeIcon from '../../assets/home.svg'
import LogoIcon from '../../assets/logo.svg'
import './main-navbar.css'
import { useNavigate } from 'react-router-dom'
import useAuth from "../../hooks/useAuth";



const MainNavbar = () => {
    const { auth } = useAuth();
    const navigate = useNavigate();


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
                           { auth?.accessToken &&     
                            <button
                                onClick={()=>navigate('/productadd')}
                            > 
                                <img className='svg-icon' src={ProductAddIcon}></img>
                                Ürün Ekle
                            </button> 
                            }
                            </li>
                            <li>
                            { auth?.accessToken &&          
                                <button 
                                    onClick={()=>navigate('/myaccount')}
                                >
                                    <img className='svg-icon' src={HomeIcon}></img>
                                    Hesabım
                                </button> 
                            }
                            </li>
                            <li> 
                            { !auth?.accessToken && 
                                <button 
                                    onClick={()=>navigate('/login')}
                                >
                                    <img className='svg-icon' src={HomeIcon}></img>
                                    Giriş Yap
                                </button>
                            } 
                            </li>
                            
                        </ul>
                    </nav>
                </div>
            </header>
    </>
  )
}

export default MainNavbar