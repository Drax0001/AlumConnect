import { NextRequest, NextResponse } from "next/server";
import { prisma } from '../../config/dbConnect';

export async function GET() {

    const events = await prisma.event.findMany()

    return NextResponse.json({data: events, message: 'Events sent' }, { status: 200, statusText: 'request successful' })
}
