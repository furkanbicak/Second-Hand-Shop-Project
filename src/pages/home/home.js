import React from 'react'
import './home.css'

import ProductAddIcon from '../../assets/productAdd.svg'
import Banner from '../../assets/banner.png'
import HomeIcon from '../../assets/home.svg'
import LogoIcon from '../../assets/logo.svg'

const Home = () => {
  return (
    <>
      <div className='main'>
        <header className='main-header'>
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
    
        <div className='content'>
          <div className='main-banner'>
            <img src={Banner} />
          </div>
          <div className="main-navbar">
            <ul>
              <li><a href="#home">Erkek</a></li>
              <li><a href="#news">Kadın</a></li>
              <li><a href="#contact">Ayakkabı</a></li>
              <li><a href="#about">Elbise</a></li>
              <li><a href="#about">Çanta</a></li>
              <li><a href="#home">Erkek</a></li>
              <li><a href="#news">Kadın</a></li>
              <li><a href="#contact">Ayakkabı</a></li>
              <li><a href="#about">Elbise</a></li>
              <li><a href="#about">Çanta</a></li>
              <li><a href="#home">Erkek</a></li>
              <li><a href="#news">Kadın</a></li>
              <li><a href="#contact">Ayakkabı</a></li>
              <li><a href="#about">Elbise</a></li>
              <li><a href="#about">Çanta</a></li>
            </ul>
          </div>
          <div className="main-card">
                    
                    <div className="main-card_content">
                        <div className="main-card_content_img">
                            <img src="Image 5.png"/>
                        </div>
                         <div className="main-card_content_prodcut">
                             <p>Levis</p>
                             <p>Renk: Mavi</p>
                         </div>
                         <div className="main-card_content_price">
                             <span>1999,00TL</span>
                         </div>
                    </div>

                    <div className="main-card_content">
                        <div className="main-card_content_img">
                            <img src="Image 5.png"/>
                        </div>
                         <div className="main-card_content_prodcut">
                             <p>Levis</p>
                             <p>Renk: Mavi</p>
                         </div>
                         <div className="main-card_content_price">
                             <span>1999,00TL</span>
                         </div>
                    </div>

                    <div className="main-card_content">

                    </div>
                    
                    <div className="main-card_content">
                        <div className="main-card_content_img">
                            <img src="Image 5.png"/>
                        </div>
                         <div className="main-card_content_prodcut">
                             <p>Levis</p>
                             <p>Renk: Mavi</p>
                         </div>
                         <div className="main-card_content_price">
                             <span>1999,00TL</span>
                         </div>
                    </div>

                    <div className="main-card_content">
                       <div className="main-card_content_img">
                           <img src="Image 5.png"/>
                       </div>
                        <div className="main-card_content_prodcut">
                            <p>Levis</p>
                            <p>Renk: Mavi</p>
                        </div>
                        <div className="main-card_content_price">
                            <span>1999,00TL</span>
                        </div>
                    </div>

                    <div className="main-card_content">
                        <div className="main-card_content_img">
                            <img src="Image 5.png"/>
                        </div>
                         <div className="main-card_content_prodcut">
                             <p>Levis</p>
                             <p>Renk: Mavi</p>
                         </div>
                         <div className="main-card_content_price">
                             <span>1999,00TL</span>
                         </div>
                    </div>

                    <div className="main-card_content">
                        <div className="main-card_content_img">
                            <img src="Image 5.png"/>
                        </div>
                         <div className="main-card_content_prodcut">
                             <p>Levis</p>
                             <p>Renk: Mavi</p>
                         </div>
                         <div className="main-card_content_price">
                             <span>1999,00TL</span>
                         </div>
                    </div>

                    <div className="main-card_content">
                        <div className="main-card_content_img">
                            <img src="Image 5.png"/>
                        </div>
                         <div className="main-card_content_prodcut">
                             <p>Levis</p>
                             <p>Renk: Mavi</p>
                         </div>
                         <div className="main-card_content_price">
                             <span>1999,00TL</span>
                         </div>
                    </div>

                </div>
        </div>
      </div>
    </>
  )
}

export default Home