'use server'

// fetch action

import connectToDB from "@/database"
import Register from "@/models/register";
import { revalidatePath } from "next/cache";

export async function fetchUserAction(formData,pathToRevalidate) {
    await connectToDB();
    try{
        if(!formData) {
            return {
                success: false,
                message:"something went wrong"
            }
        }
        const extractedUserInfo = await Register.create(formData)
        console.log(extractedUserInfo)
        if(extractedUserInfo) {
            revalidatePath(pathToRevalidate)
            return {
                success: true,
                data: JSON.parse(JSON.stringify(extractedUserInfo))
            }
        }else {
            return {
                success: false,
                message:"something went wrong"
            }
        }

    }catch(e) {
        console.log(error)
        return {
            success: false,
            message: "couldn't fetch from the url"
        }
    }
}


// get action

export async function getUserAction() {
    await connectToDB();
    try {
        const extractedDataInfo = await Register.find({})

        if(!extractedDataInfo) {
            return {
                success:false,
                message:"something went wrong"
            }
        }else {
            return {
                success:true,
                data: JSON.parse(JSON.stringify(extractedDataInfo))
            }
        }

    }catch(e) {
        console.log(e)
        return {
            success: false,
            message: "couldn'nt get the data from the database"
        }
    }
}

// delete action

export async function deleteUserAction(Id,pathToRevalidate) {
    
    try {
        if (!Id) {
            return {
                success: false,
                message: "Id is required"
            }
        }
        await connectToDB();
        const deleteUser = await Register.findByIdAndDelete(Id);
        console.log("Deleted user:", deleteUser);

        if (deleteUser) {
            revalidatePath(pathToRevalidate)
            return {
                success: true,
                message: "user successfully deleted"
            }
        } else {
            return {
                success: false,
                message: "User not found or already deleted"
            }
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "something went wrong"
        }
    }
}


// update user

export async function updateUserAction(currentUserId,user,pathToRevalidate) {

        await connectToDB();
       try{ 
        const currentEditedId = currentUserId
        if(!currentEditedId) {
            return {
                success: false,
                message: "user Id is needed"
            }
        }
        const {firstName,lastName,email,address} = user
        const updatedUser = await Register.findOneAndUpdate(
            {_id: currentEditedId},
            {firstName,lastName,email,address} ,
            {new:true}
        )

        if(!updatedUser) {
            return {
                success:false,
                message: "something wrong"
            }
        }else {
            revalidatePath(pathToRevalidate)
            return {
                success: true,
                message: "updated"
            }
        }
    }catch(e) {
        console.log(e)
        return{
            success: false,
            message:"something is wrong "
        }
    }

}