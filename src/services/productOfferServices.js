import axios, { URL } from "../api/axios";

const token = localStorage.getItem('Token');

const config = {
    headers: { Authorization: `Bearer ${token}` }
};

// products?users_permissions_user=15
export const getUserProducts = async (id) => {
    try {
        const res = await axios.get(`${URL.products}?users_permissions_user=${id}`);
        
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
