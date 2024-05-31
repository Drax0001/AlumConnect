import { NextRequest, NextResponse } from "next/server";
import { prisma } from '../../config/dbConnect';

export async function GET() {

    const blogs = await prisma.blog.findMany()

    return NextResponse.json({data: {blogs}}, { status: 200, statusText: 'request successful' })
}



export async function POST(request: NextRequest) {
    const body = await request.json()

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