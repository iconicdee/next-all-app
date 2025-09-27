import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
      <div className="min-h-screen flex flex-col items-center justify-center ">
  
          <h2 className="text-4xl font-bold">Welcome to our User&apos;s Page</h2>
          <Button className="mt-9"><Link href={"/user-management"}>Register</Link> </Button>
      </div>
  )
   
}
