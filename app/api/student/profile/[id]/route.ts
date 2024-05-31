import { NextRequest, NextResponse } from "next/server";
import { prisma } from '../../../config/dbConnect';

interface Props {
    params: {
        id: number
    }
}

export async function GET(request: NextRequest, { params }: Props) {

    const student = await prisma.student.findUnique({
        where: {
            id: params.id
        }
    })

    return NextResponse.json({data: student, message: 'Student profile sent OK'}, { status: 200, statusText: 'request successful' })
}