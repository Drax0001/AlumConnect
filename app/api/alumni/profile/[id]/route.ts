import { NextRequest, NextResponse } from "next/server";
import { prisma } from '../../../config/dbConnect';

interface Props {
    params: {
        id: number
    }
}

export async function GET(request: NextRequest, { params }: Props) {

    try {
        const alumni = await prisma.alumni.findUnique({
            where: {
                id: Number(params.id)
            },
            omit: {
                password: true
            },
            include: {
                Blogs: true,
                Events: true
            }
        })

        return NextResponse.json({ data: alumni, message: 'Alumni profile sent OK'}, { status: 200, statusText: 'request successful' })

    } catch(err) {
        console.log(err)
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 })
    }

}