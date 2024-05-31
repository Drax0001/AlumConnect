import { NextRequest, NextResponse } from "next/server";
import { prisma } from '../../config/dbConnect';

export async function POST(request: NextRequest) {
    const body = await request.json()

    const student = await prisma.student.findUnique({
        where: {
            email: body.email,
            password: body.password
        }
    })

    if (!student) {
        return NextResponse.json({ error: 'Either your email or password is incorrect!'}, { status: 400, statusText: 'Bad Request' })
    } else {
        const { password, ...studentWithoutPassword } = student

        return NextResponse.json({ data: studentWithoutPassword, message: 'Student Successfully Logged in' }, { status: 200, statusText: 'Login Successful' })
    }
}
