import React from 'react'
import './login.css'

import LoginBanner from '../../assets/loginBanner.png'
import Button from '../../components/button/button'
import Input from '../../components/input/input'
import Logo from '../../assets/logo.svg'


const Login = () => {
  return (
    <div className="login">

        <div className="login_image">
            <img src={LoginBanner} alt="Girl" />
        </div>

        <div className="form">

           <div className="form-logo">
                <img src={Logo} />
           </div>

           <div className="form-login">

               <div className="form-login-title">
                   <label>Giriş yap</label>
               </div>
               <div className="form-login-lorem">
                   <label>Fırsatlardan yararlanmak için giriş yap</label>
               </div>

                <div className="form-login-username">
                    <Input 
                        title       =   {'Email'} 
                        type        =   {'text'} 
                        name        =   {'email'} 
                        placeholder =   {'Email@gmail.com'} 
                    />
                </div>

                <div className="form-login-password">
                    <Input 
                        title       =   {'Password'} 
                        type        =   {'password'} 
                        name        =   {'password'} 
                        placeholder =   {'*****'} 
                    />
                </div>


                <div className="form-login-password-forget">
                    <a>Şifremi Unuttum</a>  
                </div>

                
                <Button 
                    className   =   {'form-login-button'}
                    title       =   {'Giriş'}  
                />

                <p className="message">
                    Hesabın yok mu?
                    <a href="#"> Üye ol </a>
                </p>
        
            </div>
              
        </div>     
    </div>
  )
}

export default Login;