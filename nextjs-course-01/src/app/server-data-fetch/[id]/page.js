async function fetchEachUser(currentUser) {
  const apiResponse= await fetch(`https://dummyjson.com/users/${currentUser}`)
  const result = await apiResponse.json()
  return result
}

const UserDetails = async({params}) => {

  const userInfo= await fetchEachUser(params.id)
  console.log(userInfo.firstName)
  return (
    <div>
      <h2>{userInfo.firstName}</h2>
      <h2>{userInfo.age}</h2>
      <h2>{userInfo.birthDate}</h2>
      <h2>{userInfo.lastName}</h2>
      <h2>{userInfo.phone}</h2>
    </div>
  )
}

export default UserDetails
