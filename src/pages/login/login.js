import React, { useState } from 'react'
import './login.css'

import LoginBanner from '../../assets/loginBanner.png'
import Button from '../../components/button/button'
import Input from '../../components/input/input'
import Logo from '../../assets/logo.svg'
import useAuth from '../../hooks/useAuth'
import { useLocation, useNavigate } from 'react-router-dom'
import axios, { URL } from '../../api/axios'


const Login = () => {
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errmsg, setErrMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(URL.login,
                {
                    "identifier": `${user}`,
                    "password": `${password}`
                }
            );
            const userId =  response.data.user.id;
            console.log("Ne döndü", response.data.user.id);
            const accessToken = response?.data.jwt;
            console.log("Token", accessToken)

            //! localStorage token kaydet.
            localStorage.setItem('Token', accessToken);

           
            setAuth({ user, password, accessToken, userId });
            setUser('');
            setPassword('');
            navigate(from, { replace: true });
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            // errRef.current.focus();
        }
    }
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
               <form onSubmit={handleSubmit}>
                <div className="form-login-username">
                    <Input 
                        title       =   {'Email'} 
                        type        =   {'text'} 
                        name        =   {'email'} 
                        placeholder =   {'Email@gmail.com'}
                        onChange    =   {(e)=> setUser(e.target.value)} 
                    />
                </div>

                <div className="form-login-password">
                    <Input 
                        title       =   {'Password'} 
                        type        =   {'password'} 
                        name        =   {'password'} 
                        placeholder =   {'*****'}
                        onChange    =   {(e)=> setPassword(e.target.value)}  
                    />
                </div>


                <div className="form-login-password-forget">
                    <a>Şifremi Unuttum</a>  
                </div>

                
                <Button 
                    className   =   {'form-login-button'}
                    title       =   {'Giriş'}  
                />
            </form>
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