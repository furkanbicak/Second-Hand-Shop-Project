import axios, { URL } from "../api/axios";

//? Kullanım durumlarını getiren servis.
export const getBrands = async () => {
    try {
        const res = await axios.get(`${URL.brands}`);
        
        if(res.status === 200){
            console.log("Offers:", res.data)
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