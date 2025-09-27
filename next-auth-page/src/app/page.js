import { fetchAllProducts } from "@/actions"
import ProductCard from "@/components/product-card";
import { auth } from '@/auth'
import { redirect } from "next/navigation";



export default async function Home() {
  const getSession = await auth()

  console.log(getSession)
  if(!getSession?.user) redirect("/unauth-page")
  const getAllProducts = await fetchAllProducts()
  return (
    <div>
      {getAllProducts && getAllProducts?.data && getAllProducts?.data?.length > 0 ? (
        <ul className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto p-2">
          {getAllProducts.data.map(productItem => (
            <li key={productItem.id}>
              <ProductCard item={productItem} />
            </li>
          ))}
        </ul>
      ) : (
        <h1>Products not found</h1>
      )}
    </div>
  )
}
