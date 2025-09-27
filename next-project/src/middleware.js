import { NextResponse } from "next/server"
import { cookies } from "next/headers";

export default function middleWare(request) {
    const path = request.nextUrl.pathname;
    const checkPublicPath = path === "/sign-in" || "/sign-out"

    const getCookies = cookies();
    const token = getCookies.get("token")

    if(checkPublicPath && token !== "") {
        return NextResponse.redirect(new URL("/",request.url))
        
    }

    if(!checkPublicPath && token === "") {
        return NextResponse.redirect(new URL("/sign-in",request.url))
    }


}

export const config = {
  matcher: ["/sign-in", "/sign-out"],
};