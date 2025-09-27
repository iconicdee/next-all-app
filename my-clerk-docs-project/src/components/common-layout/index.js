import React from 'react'
import Header from '../header'
import { currentUser } from '@clerk/nextjs/server'


const CommonLayout = async({children}) => {
    const user = await currentUser();
    console.log("CommonLayout user",user)
  return (
    <div className='mx-auto max-w-7xl p-6 lg:px-8'>
        {/* {Header content} */}

            <Header user={JSON.parse(JSON.stringify(user))}/>



        {/* {Header content} */}





        
        
        {/* {main content } */}


        <main>{children} </main>


        {/* {main content } */}
        
      
    </div>
  )
}

export default CommonLayout
