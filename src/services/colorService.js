import axios, { URL } from "../api/axios";

export const getColors = async () => {
    try {
        const res = await axios.get(`${URL.colors}`);
        
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