import { Bearer } from '../api/axios';

// Ürünün isSold değerini change eder.(true-false)
export const putSoldProduct = async (id, status) => {

    await Bearer.put(`/products/${id}`, 

        {isSold: `${!status}`},   
           
    )
    .then((res) => {
        console.log("Well Done");
        console.log("Res", res);
    } )
    .catch((error) => {
        console.log("Error", error)
    })
}