import axios, { URL } from "../api/axios";

const token = localStorage.getItem('Token');

const config = {
    headers: { Authorization: `Bearer ${token}` }
};

//? Teklif vermek için servis.
export const postOffers = async (id, userId, offerPrice) => {

    try {
        const res = await axios.post(`${URL.offers}`,
            {
                "product": id,
                "users_permissions_user": userId,
                "offerPrice": offerPrice
            }, 
            config,
        );
        
        if(res.status === 200){
            console.log("Ürünler İD", res.data)
            return res.data
        } 
        else{
            return {
                error: 'Data gelmedi'
            }
        }
       
    } catch (error) {
        console.log("error")
    }
}