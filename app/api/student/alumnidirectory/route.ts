import { NextRequest, NextResponse } from "next/server";
import { prisma } from '../../config/dbConnect';

export async function GET() {

    const alumni = await prisma.alumni.findMany()

    return NextResponse.json({data: { numberOfAlumni: alumni.length, alumniList: alumni }, message: 'Alumni List sent' }, { status: 200, statusText: 'request successful' })
}