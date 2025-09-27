"use client"


import { Button } from "../ui/button";
import { logOutUserAction } from "@/action";
import { useRouter } from "next/navigation";

export default function LogOut() {
    const router = useRouter();

    async function handleLogOut() {
        const result = await logOutUserAction();
        router.push("/sign-in");
    }

    return <Button onClick={handleLogOut}>Log Out</Button>
}