'use client'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"
import { deleteUserAction } from "@/action"
import { updateUserAction } from "@/action"
import { useContext } from "react"
import { UserContext } from "@/context"


const SingleUser = ({user}) => {
    const {openForm,setOpenForm,currentEditedId,setCurrentEditedId,userStateForm,setUserStateForm} = useContext (UserContext)
    

    async function handleDelete(userId) {
        const result= await deleteUserAction(userId,"/add-user")
        
    }

    async function handleEdit(user) {
        console.log("user",user)
        setOpenForm(true)
        setUserStateForm({
            firstName: user?.firstName,
            lastName: user?.lastName,
            email: user?.email,
            address: user?.address
        })
        console.log("updated user",userStateForm)
        setCurrentEditedId(user?._id)
        console.log(currentEditedId)
        
    }
  return (
    <div>
        <Card >
            <CardHeader>
                <CardTitle>{user?.firstName} {user?.lastName}</CardTitle>
                <CardDescription>{user?.email}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{user?.address}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button onClick={()=> handleEdit(user)}>Edit</Button>
                <Button onClick={()=>handleDelete(user?._id)}>Delete</Button>
            </CardFooter>
        </Card>
      
    </div>
  )
}

export default SingleUser
