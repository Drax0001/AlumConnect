import { NextRequest, NextResponse } from "next/server";
import { prisma } from '../../config/dbConnect';

export async function GET() {

    const events = await prisma.event.findMany()

    return NextResponse.json({data: {events}, message: 'Events sent' }, { status: 200, statusText: 'request successful' })
}


//BELONGS TO THE ALUMNI/RESOURCES PAGE; STUDENT SHOULDN'T BE ABLE TO CREATE RESOURCES
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

    return NextResponse.json(newBlog, { status: 201, statusText: 'Blog Created Successfully' })
}