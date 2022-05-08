import Register from '../pages/register/register';
import Login from '../pages/login/login';
import Home from '../pages/home/home';
import ProductDetail from '../pages/productDetail/productDetail'
import MyAccount from '../pages/myAccount/myAccount'
import ProductAdd from '../pages/productAdd/productAdd'
import Missing from '../pages/missing/missing'
import Layout from '../components/layout/layout';
import { Route, Routes } from 'react-router-dom'
import Parametre from '../pages/parametre/parametre';
import RequireAuth from '../components/RequireAuth'

import TeklifAldıklarım from '../components/teklif-adlıklarım/teklif-aldıklarım';
import TeklifVerdiklerim from '../components/teklif-verdiklerim/teklif-verdiklerim';

function Router() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>

        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login /> } />
        <Route path="register" element={<Register />} />
        <Route path="category/:id" element={<Parametre />} />
      
        {/* Private routes */}
      {/* <Route element={<RequireAuth/>}>  */}
        <Route path="productDetail" element={<ProductDetail />} />
      
        <Route path="myAccount" element={<MyAccount />} />

        <Route path="teklifAl" element={<TeklifAldıklarım />} />
        <Route path="teklifVerdiklerim" element={<TeklifVerdiklerim />} />
      
        <Route path="productAdd" element={<ProductAdd />} />
      {/* </Route> */}

        {/* catch all */}
        <Route path="*" element={<Missing />} />
    </Route>
  </Routes>
  )
}

export default Router;