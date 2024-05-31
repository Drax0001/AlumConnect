import { NextRequest, NextResponse } from "next/server";
import { prisma } from '../../../config/dbConnect';


interface Props {
    params: {
        id: number
    }
}

export async function GET(request: NextRequest, { params }: Props) {

    const event = await prisma.event.findUnique({
        where: {
            id: params.id
        }
    })

    return NextResponse.json({data: {event}, message: 'Event Sent' }, { status: 200, statusText: 'request successful' })
}