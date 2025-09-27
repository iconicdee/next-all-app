"use server"
import { signIn, signOut } from "../auth";

// get all the products

export async function fetchAllProducts() {
    try{
        const apiResponse= await fetch('https://dummyjson.com/products',{
            method: 'GET',
            cache: 'no-store'
        });
        const results= await apiResponse.json();
        return { 
            success:true,
            data: results?.products
        }
    }catch(e) {
        console.log(e)
        return {
                success: false,
                message: "something went wrong"
            
        }
    }
}


export async function fetchProductDetails(currentProductId) {
    try{
        const apiResponse= await fetch(`https://dummyjson.com/products/${currentProductId}`,{
            method: 'GET',
            cache: 'no-store'
        })
         const result= await apiResponse.json();
        return result;  

    }catch(e) {
        console.log(e)
        return {
                success: false,
                message: "something went wrong"
            
        }
    }
}



export async function LoginUserAction() {
    await signIn('github')
}


export async function LogoutUserAction() {
    await signOut()
}