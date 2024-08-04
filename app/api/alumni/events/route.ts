import { NextRequest, NextResponse } from "next/server";
import { prisma } from '../../config/dbConnect';
import eventSchema from "./schema";

export async function GET() {

    const events = await prisma.event.findMany()

    return NextResponse.json({data: events, message: 'Events sent' }, { status: 200, statusText: 'request successful' })
}

export async function POST(request: NextRequest) {
    const body = await request.json()
    
     // Using the schema to validate the request body
    const validation = eventSchema.safeParse(body)

    if(!validation.success) {
        return NextResponse.json(validation.error.errors[0], { status: 400, statusText: 'Bad Request' })
    }

    try {
        const newEvent = await prisma.event.create({
            data: {
                title: body.title,
                description: body.description,
                authorId: body.authorId,
                category: body.category,
                date: body.date,
                time: body.time,
                location: body.location,
            },
            include: {
                author: true
            }
        })

        return NextResponse.json({ data: newEvent }, { status: 201, statusText: 'Blog Created Successfully' })
    } catch(err) {
        console.log(err)
        return NextResponse.json({ message: 'Failed to create event' }, { status: 500 })
    }
}