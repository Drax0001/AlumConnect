import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import * as jose from 'jose'

export async function middleware(request: NextRequest) {
    //Check if Alumni cookie exists
    if (cookies().has('alumniAuth')) {
        //check for cookie
        const cookie = cookies().get('alumniAuth')
        if(!cookie) {
            return NextResponse.redirect(new URL("/login", request.url))
        }   
        
        //Validate it
        const secret = new TextEncoder().encode(process.env.JWT_SECRET)
        const jwt = cookie.value
        
        try {
            const { payload } = await jose.jwtVerify(jwt, secret, {
                algorithms: ['HS256']
            })
            // console.log(payload)
                    
        } catch(err) { 
            return NextResponse.redirect(new URL("/login", request.url))
        }
        
    //Check if student cookie exists
    } else if (cookies().has('studentAuth')) {
        const matcher = "/student/:path*"
        
        //check for cookie
        const cookie = cookies().get('studentAuth')
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

    //If neither cookies exist
    } else {
        return NextResponse.redirect(new URL("/login", request.url))
    }
    
    // return NextResponse.redirect(new URL("/home", request.url))
}

export const config = {
    matcher: ["/student/:path*", "/alumni/:path*"]
}