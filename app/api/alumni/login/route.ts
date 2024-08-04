import { NextRequest, NextResponse } from "next/server";
import { prisma } from '../../config/dbConnect';
import loginSchema from "../../student/login/schema";
import bcrypt from 'bcrypt'
import * as jose from 'jose'

export async function POST(request: NextRequest) {
    const body = await request.json()

    // validate body against login schema
    const validation = loginSchema.safeParse(body)

    if(!validation.success) {
        return NextResponse.json(validation.error.errors[0], { status: 400, statusText: 'Bad Request' })
    }

    // find the alumni with the exact credentials
    const alumni = await prisma.alumni.findUnique({
        where: {
            email: body.email,
            // password: body.password // to be removed and implemented in another way
        }
    })

    //If alumni doesn't exist 
    if (!alumni) {
        return NextResponse.json({ message: 'This alumni does not exist' }, { status: 404, statusText: 'Not Found' })
    }

    //Compare the inputed password with the hashed password in the database
    const passwordMatch =  await bcrypt.compare(body.password, alumni.password)

    if(!passwordMatch) {
        return NextResponse.json({ message: 'Password is incorrect' }, { status: 400 })
    }

    // // Create jwt token
    // const secret = new TextEncoder().encode(process.env.JWT_SECRET)
    // const alg = 'HS256'

    // const jwt = await new jose.SignJWT(alumni)
    //     .setProtectedHeader({ alg })
    //     .setExpirationTime("72h")
    //     .setSubject(alumni.id.toString())
    //     .sign(secret)

    const { password, ...alumniWithoutPassword } = alumni
    return NextResponse.json({ data: alumniWithoutPassword, message: 'Alumni Successfully Logged in' }, { status: 200, statusText: 'Login Successful' })
}
