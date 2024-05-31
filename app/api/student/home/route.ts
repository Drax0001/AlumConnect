import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../config/dbConnect";

export async function GET() {
    const alumni = await prisma.alumni.findMany({
      take: 5
    })

    const blogs = await prisma.blog.findMany({
        take: 3
    })

    const events = await prisma.event.findMany({
        take: 3
    })

    return NextResponse.json({data: {alumni, blogs, events}}, { status: 200, statusText: 'request successful' })
  }