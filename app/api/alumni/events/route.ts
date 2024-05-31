import { NextRequest, NextResponse } from "next/server";
import { prisma } from '../../config/dbConnect';

export async function GET() {

    const events = await prisma.event.findMany()

    return NextResponse.json({data: {events}, message: 'Events sent' }, { status: 200, statusText: 'request successful' })
}

export async function POST(request: NextRequest) {
    const body = await request.json()
    
    if(!body.title || !body.description || !body.authorId) {
        return NextResponse.json({ error: 'Enter all the fields' }, { status: 400, statusText: 'Bad Request' })
    }

    const newEvent = await prisma.event.create({
        data: {
            title: body.title,
            description: body.description,
            authorId: body.authorId,
            category: body.category,
            datetime: body.date,
            location: body.location,
            thumbnail: body.thumbnail
        },
        include: {
            author: true
        }
    })

    return NextResponse.json({ data: newEvent }, { status: 201, statusText: 'Blog Created Successfully' })
}