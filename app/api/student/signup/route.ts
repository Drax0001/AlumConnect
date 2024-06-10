import { NextRequest, NextResponse} from 'next/server'
import { prisma } from '../../config/dbConnect';
import signupSchema from './schema';
import bcrypt from 'bcrypt'

export async function POST(request: NextRequest) {
  const body = await request.json()

  // Using the schema to validate the request body
  const validation = signupSchema.safeParse(body)

  if(!validation.success) {
    return NextResponse.json(validation.error.errors[0], { status: 400, statusText: 'Bad Request' })
  }

  //Checking if this email already exist in the DB
  const student = await prisma.student.findUnique({
    where: {
      email: body.email
    }
  })

  if (student) {
    return NextResponse.json({ message: 'Email already in use'}, { status: 400, statusText: 'Bad Request' })
  }  
  
  //Hash password before storing in database
  const hashedPassword = await bcrypt.hash(body.password, 10)
  
  const newStudent = await prisma.student.create({
    data: {
      email: body.email,
      username: body.username,
      password: hashedPassword
    }
  })

  const { password, ...studentWithoutPassword } = newStudent

  // return user object except the password
  return NextResponse.json({ data: studentWithoutPassword, message: 'Signup successful' }, { status: 201, statusText: 'User Created Successfully' })
}
