import Link from "next/link"


async function fetchListOfData()  {
  try {
    const apiResponse= await fetch('https://dummyjson.com/users')
    const result= await apiResponse.json()
    const finalResult=result.users
    return finalResult
  }catch(e) {
    throw new Error(e)
  }
}

const ServerDataFetching = async() => {

  const listOfUsers = await fetchListOfData()
  console.log(listOfUsers)
  return (
    <div>
      <ul>
        {
          listOfUsers.map(user=><li key={user.id}><Link href={`/server-data-fetch/${user.id}`}>{user.firstName}</Link></li>)
        }
      </ul>
    </div>
  )
}

export default ServerDataFetching
