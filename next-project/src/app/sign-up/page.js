'use client'

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { userRegistrationFormControls } from "@/utils"
import CommonFormElement from "@/components/ui/form-element/page"
import { useState } from "react"
import { initialSignUpFormData } from "@/utils"
import { Button } from "@/components/ui/button"
import { registerUserAction } from "@/action"
import { useRouter } from "next/navigation"


const SignUp = () => {
    const [signUpFormData,setSignUpFormData] = useState(initialSignUpFormData)
    const router = useRouter()

    

    function handleSignUpBtnValid() {
        return Object.keys(signUpFormData).every((key)=> (signUpFormData[key]).trim() !== "")
        
    }

    async function handleSignUp() {
        const result = await registerUserAction(signUpFormData)
        console.log(result)
        if(result?.data)  {
          router.push("/sign-in")
          }else{
            console.log("not redirecting")
          }
        

    }

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={async (e) => {
          e.preventDefault();
          await handleSignUp();
        }}>
        {
            userRegistrationFormControls.map(controlItem=>
                <div key={controlItem.name}>
                    <Label htmlFor={controlItem.name}>{controlItem.label}</Label>
                    <CommonFormElement value={signUpFormData[controlItem.name]} currentItem={controlItem} onChange={(e)=>setSignUpFormData({
                        ...signUpFormData,
                        [e.target.name] : e.target.value
                    })}/>
                </div>
            )
        }
        <Button disabled={!handleSignUpBtnValid()} className="disabled:opacity-65" type="submit">Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUp
