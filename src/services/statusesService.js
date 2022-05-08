import axios, { URL } from "../api/axios";

//? Kullanım durumlarını getiren servis.
export const getStatuses = async () => {
    try {
        const res = await axios.get(`${URL.statuses}`);
        
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