import { NextRequest, NextResponse} from 'next/server'
import { prisma } from '../../config/dbConnect';
import alumniSignupSchema from './schema';
import bcrypt from 'bcrypt'

export async function POST(request: NextRequest) {
    const body = await request.json()

  // Using the schema to validate the request body
    const validation = alumniSignupSchema.safeParse(body)

    if(!validation.success) {
    return NextResponse.json(validation.error.errors[0], { status: 400, statusText: 'Bad Request' })
    }

    //Checking if this email already exist in the DB
    const alumni = await prisma.alumni.findUnique({
    where: {
        email: body.email
    }
    })

    if (alumni) {
    return NextResponse.json({ message: 'Email already in use' }, { status: 400, statusText: 'Bad Request' })
    }  

    //Hash password before storing in database
    const hashedPassword = await bcrypt.hash(body.password, 10)

    const newalumni = await prisma.alumni.create({
    data: {
        email: body.email,
        username: body.username,
        password: hashedPassword,
        jobTitle: body.jobTitle,
        AreasOfFocus: body.areasOfFocusArray
    }
    })

    const { password, ...alumniWithoutPassword } = newalumni

  // return user object except the password
    return NextResponse.json({ data: alumniWithoutPassword, message: 'Signup successful' }, { status: 201, statusText: 'User Created Successfully' })
}
