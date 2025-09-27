'use client'

import useSWR from "swr"
import Link from "next/link"


const fetcher= (...args)=> fetch(...args).then((res)=>res.json())

const ClientSideDataFetching = () => {
    const {data,error,isLoading} = useSWR('https://dummyjson.com/users',fetcher)

    if(error) <h3>{error.message}</h3>
    if(isLoading) <h3>it is oresently loading</h3>

    return (
        <div>
            <h1>Client Data Fetching</h1>
            <ul>
                {data && data.users && data.users.length > 0
                    ? data.users.map(u => (
                        <li key={u.id}>
                            <Link href={`/client-data-fetch/${u.id}`}>{u.firstName}</Link>
                        </li>
                    ))
                    : null
                }
            </ul>
        </div>
    )
}

export default ClientSideDataFetching