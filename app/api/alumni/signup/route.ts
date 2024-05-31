import { NextRequest, NextResponse} from 'next/server'
import { prisma } from '../../config/dbConnect';

export async function POST(request: NextRequest) {
    const body = await request.json()

    const { email, username, jobTitle } = body 

    if(!email || !username || !jobTitle || !body.password) {
        return NextResponse.json({ error: 'Enter all the fields' }, { status: 400, statusText: 'Bad Request' })
    }

    const alumni = await prisma.alumni.findUnique({
    where: {
        email: email
    }
    })

    if (alumni) {
        return NextResponse.json({ error: 'Email already in use' }, { status: 400, statusText: 'Bad Request' })
    }
    

    const newAlumni = await prisma.alumni.create({
    data: {
        email: email,
        username: username,
        password: body.password,
        jobTitle: jobTitle
    }
    })

    const { password, ...alumniWithoutPassword } = newAlumni

    return NextResponse.json({ data: alumniWithoutPassword, message: 'Signup successful' }, { status: 201, statusText: 'User Created Successfully' })
}
