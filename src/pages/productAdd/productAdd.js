import React, { useEffect, useState } from 'react'
import axios, { URL } from '../../api/axios'
import DropdownButton from '../../components/dropdown-button/dropdown-button'
import Input from '../../components/input/input'
import MainNavbar from '../../components/main-navbar/main-navbar'
import { postProduct } from '../../services/productPostServices'
import './productAdd.css'

const ProductAdd = () => {
    const [products, setProducts] = useState(null);
    const [deneme, setDeneme] = useState({
        image:''
    });
    

    const token = localStorage.getItem('Token');
    

    const config = {
        headers: { 
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
        }
    };

    // useEffect(() => {
       
    // },[])
    // useEffect(() => {
       
    // },[products]);

    // const getproductsData = async () => {
    //     const data = await postProduct();
    //     setProducts(data);
    // }

    let formData = new FormData();

    const onFileChange = (e) =>{

        if(e.target && e.target.files[0]){
            console.log("Files", e.target.files[0])
            formData.append('files', e.target.files[0])
            formData.append('data', JSON.stringify(
                {
                    "name": "Siyah Penye",
                    "description": "Bir defa kullanıldı.Dar geldiği için satıyorum.",
                    "category": "1",
                    "brand": "Zara",
                    "color": "Siyah",
                    "status": "Hiç kullanılmadı.",
                    "price": 321,
                    "isOfferable": true,
                    "isSold": false,
                    "users_permissions_user": "15",
                }
            ))
        }
    }

    const submitFileData = () =>{
        console.log("Form Data:",formData)
        console.log("Form Data:",deneme)

        try {
            const res = axios.post(`${URL.products}`,
               formData,
                config,
            );
            
            if(res.status === 200){
                console.log("Ürün Kaydedildi:", res.data)
                return res.data
            } 
            else{
                return {
                    error: 'Ürün Kaydedilemedi...'
                }
            }
           
        } catch (error) {
            console.log("error")
        }
    }
    return (
        <>
            <MainNavbar/>
            <div className='product-content'>
                <div className="product-add-content">
                    <div className="product-add-main">

                        <div className="product-detail">
                        <span className="header">Ürün Detayları</span>

                        <div className="product-detail-name">

                                <Input 
                                    title       =   {'Ürün Adı'} 
                                    type        =   {'text'} 
                                    name        =   {'name'} 
                                    placeholder =   {'Örnek: İphone 12 Pro Max'} 
                                />
                        </div>

                        <div className="product-detail-explanation">
                                <Input 
                                    title       =   {'Açıklama'} 
                                    type        =   {'text'} 
                                    name        =   {'name'} 
                                    placeholder =   {'Ürün açıklaması girin'} 
                                />
                        </div>

                        <div className="product-detail-multi">
                            
                            <div className="product-detail-dropdown">

                                <DropdownButton title={'Kategori'} />
                                
                            </div>

                            <div className="product-detail-dropdown">

                                <DropdownButton title={'Kategori'} />

                            </div>

                        </div>

                        <div className="product-detail-multi">
                            <div className="product-detail-dropdown">
                                 <DropdownButton title={'Renk'} />
                            </div>
                            <div className="product-detail-dropdown">
                                <DropdownButton title={'Kullanım Durumu'} />
                            </div>
                        </div>

                        <div className="product-detail-price">

                            <Input 
                                title       =   {'Fiyat'} 
                                type        =   {'number'} 
                                name        =   {'name'} 
                                placeholder =   {'Bir fiyat girin TL'} 
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
                        <span className="header">Ürün Görselleri</span>
                    
                        <div className="prdouct-image-content">
                            <div className="prdouct-image-content_svg">
                                <img src="icon.svg"/>
                            </div>
                            <div className="prdouct-image-content_title">
                                Sürükleyip bırakarak yükle veya
                            </div>
                            <div className="prdouct-image-content_button">
                                <button >Görsel Seçin </button>
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