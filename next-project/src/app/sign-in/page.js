'use client'
import { Label } from "@radix-ui/react-label";
import { userSignInFormControls } from "@/utils";
import CommonFormElement from "@/components/ui/form-element/page";
import { initialSignInFormData } from "@/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { logInUserAction } from "@/action";
import { useRouter } from "next/navigation";


const SignIn = () => {
  const [signInFormData,setSignInFormData] = useState(initialSignInFormData)

  const router = useRouter()


  async function handleSignInSubmit() {
    console.log("message")
    const response= await logInUserAction(signInFormData)
    console.log(response)
    if(response?.success) {
      router.push("/")
    }else {
      console.log("redirect")
      router.push("/sign-up")
    }

    

  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={async (e) => {
          e.preventDefault();
          await handleSignInSubmit();
        }}>
        {userSignInFormControls.map(controlItem=>
          <div key={controlItem.name}>
            <Label>{controlItem.label}</Label>
            <CommonFormElement  currentItem={controlItem} value={signInFormData[controlItem.name]} onChange={(e)=>setSignInFormData({
              ...signInFormData,
              [e.target.name] : e.target.value
            })}/>
          </div>
        )}
        <Button type="submit"> Sign In</Button>
      </form>
    </div>
  )
}

export default SignIn;