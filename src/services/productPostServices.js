import axios, { URL } from "../api/axios";

const token = localStorage.getItem('Token');

const config = {
    headers: { Authorization: `Bearer ${token}` }
};


//? Ürün eklemek için servis.
export const postProduct = async (formData) => {

    try {
        const res = await axios.post(`${URL.products}`,
            formData,
            config
            
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