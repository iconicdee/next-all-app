'use client'


import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Home() {

  const router = useRouter();

  console.log(router)

  function handleNavigate() {
    router.push("/products");
  }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 sm:items-start items-center">
        <h1 className="">Welcome to nextjs</h1>
        <Link href={"/products"}>Navigate to product </Link>
        <Link href={"/account"}>Navigate to account page</Link>

        <h2 className="font-bold mt-3 text-lg">Alternative way of navigating using useRouter</h2>
        <button onClick={handleNavigate}>Navigate to products page using use router</button>
      </main>
    </div>
  );
}
