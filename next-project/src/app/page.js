import { fetchAuthUserAction } from "@/action"
import LogOut from "@/components/logout"



export default async function Home() {
  const currentUser = await fetchAuthUserAction()
  console.log("current",currentUser)
  return (
    <div>
      <h1>Next js Authentication</h1>
      <h1>{currentUser?.data?.name}</h1>
      <p>{currentUser?.data?.email}</p>
      <LogOut/>
    </div>
  
  )
}
