'use client'

import { createContext, useState } from "react";
import { addNewUserInitialState } from "@/utils";


export const UserContext = createContext(null)

export default function UserState({children}) {

    const[openForm,setOpenForm] = useState(false)
    const [userStateForm,setUserStateForm] = useState(addNewUserInitialState)
    const [currentEditedId,setCurrentEditedId] = useState(null)


    return <UserContext.Provider value={{openForm,setOpenForm,userStateForm,setUserStateForm,currentEditedId,setCurrentEditedId}}>  {children}</UserContext.Provider>
}