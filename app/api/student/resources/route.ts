import { NextRequest, NextResponse } from "next/server";
import { prisma } from '../../config/dbConnect';

export async function GET() {

    const blogs = await prisma.blog.findMany()

    return NextResponse.json({data: blogs}, { status: 200, statusText: 'request successful' })
}
