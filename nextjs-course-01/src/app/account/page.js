import {redirect} from 'next/navigation'

const Account = () => {
    const userProfileInfo = null;

    if (userProfileInfo === null) redirect('products');
  return (
    <div>
      <h1>Account</h1>
    </div>
  )
}

export default Account;


