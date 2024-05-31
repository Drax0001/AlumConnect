import { NextRequest, NextResponse } from "next/server";
import { prisma } from '../../config/dbConnect';

export async function POST(request: NextRequest) {
    const body = await request.json()

    const { email, password } = body

    if(!email || !password) {
        return NextResponse.json({ error: 'Enter all the fields' }, { status: 400, statusText: 'Bad Request' })
    }

    const alumni = await prisma.alumni.findUnique({
        where: {
            email: email,
            password: password
        }
    })

    if (!alumni) {
        return NextResponse.json({ error: 'Either your email or password is incorrect!'}, { status: 400, statusText: 'Bad Request' })
    } else {
        const { password, ...alumniWithoutPassword } = alumni

        return NextResponse.json({ data: alumniWithoutPassword, message: 'Alumni Successfully Logged in' }, { status: 200, statusText: 'Login Successful' })
    }
}
