import axios, { URL } from '../api/axios';

// Service that brings products.
export const getProducts = async () => {
    try {
        const res = await axios.get(URL.products);
        
        if(res.status === 200){
            console.log("Ürünler", res.data)
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

// Service that brings categories and products belonging to that category.
export const getCategories = async () => {
    try {
        const res = await axios.get(URL.categories);
        
        if(res.status === 200){
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


