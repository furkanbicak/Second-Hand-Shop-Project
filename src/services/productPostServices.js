import axios, { URL } from "../api/axios";

const token = localStorage.getItem('Token');

const config = {
    headers: { Authorization: `Bearer ${token}` }
};

// Ürün eklemek için servis.
export const postProduct = async () => {

    try {
        const res = await axios.post(`${URL.products}`,
            {
                "name": "Mavi Pantolon",
                "description": "Bir defa kullanıldı.Dar geldiği için satıyorum.",
                "category": "1",
                "brand": "Polo",
                "color": "Mavi",
                "status": "Hiç kullanılmadı.",
                "price": 120,
                "isOfferable": true,
                "isSold": false,
                "users_permissions_user": "15"
              },
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