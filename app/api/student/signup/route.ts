import { NextRequest, NextResponse} from 'next/server'
import { prisma } from '../../config/dbConnect';

export async function POST(request: NextRequest) {
  const body = await request.json()

  const student = await prisma.student.findUnique({
    where: {
      email: body.email
    }
  })

  if (student) 
    return NextResponse.json({ error: 'Email already in use'}, { status: 400, statusText: 'Bad Request' })

  const newStudent = await prisma.student.create({
    data: {
      email: body.email,
      username: body.username,
      password: body.password
    }
  })

  const { password, ...studentWithoutPassword } = newStudent

  return NextResponse.json({ data: studentWithoutPassword, message: 'Signup successful' }, { status: 201, statusText: 'User Created Successfully' })
}
