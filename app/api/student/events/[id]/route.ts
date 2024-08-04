import { NextRequest, NextResponse } from "next/server";
import { prisma } from '../../../config/dbConnect';


interface Props {
    params: {
        id: number
    }
}

export async function GET(request: NextRequest, { params }: Props) {

    try {
        const event = await prisma.event.findUnique({
            where: {
                id: Number(params.id)
            },
            include: {
                attendees: true,
                author: {
                    omit: {
                        password: true
                    }
                }
            }
        })

        if(!event) {
            return NextResponse.json({ message: 'Event Not Found'}, { status: 404 })
        }

        return NextResponse.json({data: event, message: 'Event Sent' }, { status: 200, statusText: 'request successful' })
    } catch(err) {
        console.log(err)
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
    }

}