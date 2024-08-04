import { NextRequest, NextResponse } from "next/server";
import { prisma } from '../../config/dbConnect';
import resourceSchema from "./schema";

export async function GET() {

    const blogs = await prisma.blog.findMany({
        include: {
            author: true
        }
    })

    return NextResponse.json({data: blogs}, { status: 200, statusText: 'request successful' })
}



export async function POST(request: NextRequest) {
    const body = await request.json()

    // Using the schema to validate the request body
    const validation = resourceSchema.safeParse(body)

    if(!validation.success) {
        return NextResponse.json(validation.error.errors[0], { status: 400, statusText: 'Bad Request' })
    }

    const newBlog = await prisma.blog.create({
        data: {
            title: body.title,
            body: body.body,
            authorId: body.authorId
        },
        // include: {
        //     author: true
        // }
    })

    return NextResponse.json({ data: newBlog }, { status: 201, statusText: 'Blog Created Successfully' })
}