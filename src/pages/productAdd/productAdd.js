import React, { useEffect, useState } from 'react'

import Icon from '../../assets/icon.svg'
import Input from '../../components/input/input'
import MainNavbar from '../../components/main-navbar/main-navbar'
import { postProduct } from '../../services/productPostServices'
import { getCategories } from '../../services/productServices'
import { getColors } from '../../services/colorService'
import './productAdd.css'
import { getStatuses } from '../../services/statusesService'
import { getBrands } from '../../services/productBrandsServices'

const ProductAdd = () => {

    
   

    const [categories, setCategories] = useState(null);
    const [productBrand, setProductBrand] = useState(null);
    const [color, setColor] = useState('');
    const [statuses, setStatuses] = useState(null);

    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [categoriesOnChange, setCategoriesOnChange] = useState(null);
    const [brandOnChange, setProductBrandOnChange] = useState(null);
    const [colorOnChange, setColorOnChange] = useState('');
    const [statusesOnChange, setStatusesOnChange] = useState(null);
    const [price, setPrice] = useState(null);
    


    useEffect(() => {
        getCategoriesData();
        getColorsData();
        getStatusesData();
        getBrandData();
    },[]);

    useEffect(() => {

    },[categories]);

    const getCategoriesData = async () => {
        const dataCategoris = await getCategories();
        setCategories(dataCategoris);
    }

    const getColorsData = async () =>{
        const dataColor = await getColors();
        setColor(dataColor);
    }

    const getStatusesData = async () =>{
        const dataStatus = await getStatuses();
        setStatuses(dataStatus);
    }

    const getBrandData = async () =>{
        const dataBrands = await getBrands();
        setProductBrand(dataBrands);
    }

    let formData = new FormData();

    const onFileChange = (e) =>{

        if(e.target && e.target.files[0]){
     
            formData.append('files.image', e.target.files[0])
            formData.append('data', JSON.stringify(
                {
                    'name': productName,
                    'description': productDescription,
                    "category": categoriesOnChange,
                    "brand": brandOnChange,
                    "color": colorOnChange,
                    "status": statusesOnChange,
                    "price": price,
                    "isOfferable": true,
                    "isSold": false,
                    "users_permissions_user": "15",
                }
            ))
        }

    }

    const submitFileData = async () =>{
        await postProduct(formData);
    }
    
    let categoriesList = categories && categories?.map((item, i) => {
        return (
          <option key={i} value={item.name}>{item.name}</option>
        )
      }, this);

      let colorList = color && color?.map((item, i) => {
        return (
          <option key={i} value={item.name}>{item.name}</option>
        )
      }, this);

      let statusesList = statuses && statuses?.map((item, i) => {
        return (
          <option key={i} value={item.name}>{item.name}</option>
        )
      }, this);

      let brandList = productBrand && productBrand?.map((item, i) => {
        return (
          <option key={i} value={item.name}>{item.name}</option>
        )
      }, this);
      
    return (
        <>
            <MainNavbar/>
            <div className='product-content'>
                <div className="product-add-content">
                    <div className="product-add-main">

                        <div className="product-detail">
                        <span className="header">??r??n Detaylar??</span>

                        <div className="product-detail-name">

                                <Input 
                                    title       =   {'??r??n Ad??'} 
                                    type        =   {'text'} 
                                    name        =   {'name'} 
                                    placeholder =   {'??rnek: ??phone 12 Pro Max'} 
                                    onChange    =   {(e)=> setProductName(e.target.value)} 
                                />
                        </div>

                        <div className="product-detail-explanation">
                                <Input 
                                    title       =   {'A????klama'} 
                                    type        =   {'text'} 
                                    name        =   {'name'} 
                                    placeholder =   {'??r??n a????klamas?? girin'} 
                                    onChange    =   {(e)=> setProductDescription(e.target.value)} 
                                />
                        </div>

                        <div className="product-detail-multi">
                            <div className="product-detail-dropdown">

                                <div className="product_title title">
                                    <label className="required">Kategori</label>
                                </div>

                                <select onChange={(e)=> setCategoriesOnChange(e.target.value) }>
                                    <option >Kategori Se??</option>
                                    {categoriesList}       
                                </select>
                                
                            </div>

                            <div className="product-detail-dropdown">
                            <div className="product_title title">
                                    <label className="required">Marka</label>
                                </div>

                            <select onChange={(e)=> setProductBrandOnChange(e.target.value) }>
                                    <option >Marka Se??</option>
                                    {brandList}       
                                </select>

                            </div>
                        </div>

                        <div className="product-detail-multi">
                            <div className="product-detail-dropdown">
                            <div className="product_title title">
                                    <label className="required">Renk</label>
                                </div>

                            <select onChange={(e)=> setColorOnChange(e.target.value) }>
                                    <option >Renk Se??</option>
                                    {colorList}       
                                </select>
                            </div>
                            <div className="product-detail-dropdown">
                            <div className="product_title title">
                                    <label className="required">Kullan??m Durumu</label>
                                </div>
                            <select onChange={(e)=> setStatusesOnChange(e.target.value) }>
                                    <option >Kullan??m Durumu Se??</option>
                                    {statusesList}       
                                </select>
                            </div>
                        </div>

                        <div className="product-detail-price">

                            <Input 
                                title       =   {'Fiyat'} 
                                type        =   {'number'} 
                                name        =   {'name'} 
                                placeholder =   {'Bir fiyat girin TL'} 
                                onChange    =   {(e)=> setPrice(e.target.value)} 
                            />

                        </div>

                        <div className="product-detail-switch">
                            Teklif Opsiyonu
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </div>  

                        </div>

                        <div className="product-image">

                        <div>
                        <span className="header">??r??n G??rselleri</span>
                    
                        <div className="prdouct-image-content">
                            <div className="prdouct-image-content_svg">
                                <img src={Icon}/>
                            </div>
                            <div className="prdouct-image-content_title">
                                S??r??kleyip b??rakarak y??kle veya
                            </div>
                            <div className="prdouct-image-content_button">
                                
                                <Input id="file" type="file" onChange={onFileChange}/>
                                
                            </div>
                            <div className="prdouct-image-warning">
                                PNG ve JPEG Dosya boyutu: max. 100kb
                            </div>
                        </div>
                        </div>

                        <div className="prdouct-image-button">
                            <button onClick={submitFileData}>Kaydet</button>
                        </div>
                        
                        </div>
        
                    </div>
                </div>
            </div>    
        </>
    )
}

export default ProductAdd;