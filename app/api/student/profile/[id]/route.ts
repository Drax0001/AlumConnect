import { NextRequest, NextResponse } from "next/server";
import { prisma } from '../../../config/dbConnect';

interface Props {
    params: {
        id: number
    }
}

export async function GET(request: NextRequest, { params }: Props) {

    try {
        const student = await prisma.student.findUnique({
            where: {
                id: Number(params.id)
            },
            omit: {
                password: true
            }
        })

        return NextResponse.json({ data: student, message: 'Student profile sent OK' }, { status: 200, statusText: 'request successful' })

    } catch(err) {
        console.log(err)
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 })
    }

}