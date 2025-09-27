"use client"

import {  usePathname, useSearchParams } from "next/navigation"

const Cart = () => {
    const pathName= usePathname();
    const searchParams = useSearchParams();
  return (
    <div>
      <h1>Cart page </h1>
    </div>
  )
}

export default Cart


