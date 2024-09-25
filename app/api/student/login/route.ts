import { NextRequest, NextResponse } from "next/server"
import { prisma } from "../../config/dbConnect"
import loginSchema from "./schema"
import bcrypt from "bcrypt"
import * as jose from "jose"

export async function POST(request: NextRequest) {
  const body = await request.json()

  // validate body against login schema
  const validation = loginSchema.safeParse(body)

  if (!validation.success) {
    return NextResponse.json(validation.error.errors[0], {
      status: 400,
      statusText: "Bad Request",
    })
  }

  try {
    // find the student with the exact credentials
    const student = await prisma.student.findUnique({
      where: {
        email: body.email,
        // password: body.password // to be removed and implemented in another way
      },
    })

    //If student doesn't exist
    if (!student) {
      return NextResponse.json(
        { message: "This student does not exist" },
        { status: 404, statusText: "Not Found" }
      )
    }

    //Compare the inputed password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(body.password, student.password)

    if (!passwordMatch) {
      return NextResponse.json(
        { message: "Password is incorrect" },
        { status: 400 }
      )
    }

    // Create jwt token
    const secret = new TextEncoder().encode(process.env.JWT_SECRET)
    const alg = "HS256"

    const jwt = await new jose.SignJWT(student)
      .setProtectedHeader({ alg })
      .setExpirationTime("72h")
      .setSubject(student.id.toString())
      .sign(secret)

    const { password, ...studentWithoutPassword } = student
    return NextResponse.json(
      {
        data: studentWithoutPassword,
        token: jwt,
        message: "Student Successfully Logged in",
      },
      { status: 200, statusText: "Login Successful" }
    )
  } catch (err) {
    console.log(err)
    return NextResponse.json({
      error: "Internal Server Error Occured",
    })
  }
}
