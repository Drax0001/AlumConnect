import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../config/dbConnect";

export async function GET() {

    const alumni = await prisma.alumni.findMany({
        omit: {
            password: true
        },
        include: {
            Events: true,
            Blogs: true,
        }
    })

    return NextResponse.json({data: alumni, message: 'Alumni List sent' }, { status: 200, statusText: 'request successful' })
}