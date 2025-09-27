
import { Button } from "@/components/ui/button"
import AddNewUser from "@/components/add-user"
import { getUserAction } from "@/action"
import SingleUser from "@/components/single-user"

const UserPage = async() => {
    const getListOfUsers = await getUserAction()
  return (
    <div className="">
        <div className="max-w-6xl flex justify-center gap-48 items-center mx-auto mt-20">
            <h1 className="text-2xl font-bold mb-4">User Management</h1>
            <AddNewUser/>
        </div>
        <ul className="grid gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-7">
            {
                getListOfUsers && getListOfUsers.data && getListOfUsers.data.length > 0 ? 
                getListOfUsers.data.map(userItem=>(
                    <div key={userItem._id}>
                       <SingleUser user={userItem}/> 
                    </div>
                    
                ))
                : <h3> No users found</h3>
            }
        </ul>
      
    </div>
  )
}

export default UserPage
