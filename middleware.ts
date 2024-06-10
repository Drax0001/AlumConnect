import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import * as jose from 'jose'

export async function middleware(request: NextRequest) {
    //check for cookie
    const cookie = cookies().get('Authorization')
    if(!cookie) {
        return NextResponse.redirect(new URL("/login", request.url))
    }   

    //Validate it
    const secret = new TextEncoder().encode(process.env.JWT_SECRET)
    const jwt = cookie.value

    try {
        const { payload } = await jose.jwtVerify(jwt, secret, {})
        // console.log(payload)
        
    } catch(err) { 
        return NextResponse.redirect(new URL("/login", request.url))
    }
    
    // return NextResponse.redirect(new URL("/home", request.url))
}

export const config = {
    matcher: "/student/:path*"
}