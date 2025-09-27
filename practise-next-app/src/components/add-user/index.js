"use client"

import { fetchUserAction } from "@/action"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "@/components/ui/label"
import { addNewUserFormControls } from "@/utils"
import { addNewUserInitialState } from "@/utils"
import { updateUserAction } from "@/action"
import { useContext } from "react"
import { UserContext } from "@/context"

const AddNewUser = () => {

    const {currentEditedId,setCurrentEditedId,openForm,setOpenForm,userStateForm,setUserStateForm} = useContext(UserContext)

    function handleSaveButtonValid() {
        
        return Object.keys(userStateForm).every((key)=>(
            userStateForm[key].trim() !== ""
        ))
    }

    async function handleSubmit() {
        const result =currentEditedId !== null ? await updateUserAction(currentEditedId,userStateForm,"/add-user")  :await fetchUserAction(userStateForm,"/user-management")
        setUserStateForm(addNewUserInitialState)
        setOpenForm(false)
    }

  return (
    <div>
        <Button onClick={()=>setOpenForm(true)}
                type="button"
            >
                Add User
            </Button>
            <Dialog open={openForm} onOpenChange={setOpenForm}>
                <DialogContent>
                    <DialogHeader>
                    <DialogTitle>Add User</DialogTitle>
                    </DialogHeader>
                    <form action={handleSubmit} className="flex flex-col gap-5">
                        {
                            addNewUserFormControls.map(formItem=>(
                                <div key={formItem.name}>
                                    <Label htmlFor={formItem.name}>{formItem.label}</Label>
                                    <Input name={formItem.name} id={formItem.name} type={formItem.type} value={userStateForm[formItem.name]} onChange={(e)=>setUserStateForm(prev=>(
                                        {
                                        ...prev,
                                        [formItem.name] : e.target.value,
                                    }))}/>
                                </div>
                            ))
                        }
                    <DialogFooter>
                            <Button disabled={!handleSaveButtonValid()} className="disabled:opacity-55" type="submit" >save</Button>
                    </DialogFooter>
                    </form>
                    
                </DialogContent>
            </Dialog>
    </div>
  )
}

export default AddNewUser
