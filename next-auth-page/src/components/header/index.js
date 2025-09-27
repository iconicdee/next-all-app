"use client"
import Link from 'next/link'



import React from 'react'
import { Button } from '../ui/button'
import { LoginUserAction, LogoutUserAction } from '@/actions'

const Header = ({getSession}) => {
    console.log("get session in header",getSession)
    async function handleAuthSignIn() {
        await LoginUserAction()
    }


    async function handleAuthSignOut() {
        await LogoutUserAction()
    }
  return (
    <header className='flex shadow-md py-4 px-4 bg-white min-h-[70px] tracking-wide relative z-50'>
        <div className='flex flex-wrap items-center justify-between gap-5 w-full'>
            <Link href={"/"}>Shopping Cart</Link>
        </div>
        <div>
            <ul className='flex gap-6 items-center justify-center mr-10'>
                <li className='text-lg font-semibold'>
                    
                    <Link href='/'>Products</Link>

                </li>
                <li className='text-lg font-semibold'>
                    <Link href='/cart'>Cart</Link>
                </li>
            </ul>
        </div>
        <div className='flex space-x-3'>
            <form action={getSession?.user ? handleAuthSignOut : handleAuthSignIn }> 
                <Button type="submit">
                    {
                        getSession?.user ? "LogOut" : "LogIn"
            
                    }
            </Button>
            </form>
        </div>
        
      
    </header>
  )
}

export default Header
