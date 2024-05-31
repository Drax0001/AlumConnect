import { NextRequest, NextResponse } from "next/server";
import { prisma } from '../../../config/dbConnect';


interface Props {
    params: {
        id: number
    }
}

export async function GET(request: NextRequest, { params }: Props) {

    const blog = await prisma.blog.findUnique({
        where: {
            id: params.id
        }
    })

    return NextResponse.json({data: {blog}}, { status: 200, statusText: 'request successful' })
}

//BELONGS TO THE ALUMNI/RESOURCES PAGE; STUDENT SHOULDN'T BE ABLE TO DELETE RESOURCES
export async function DELETE(request: NextRequest, { params }: Props) {
    const blog = await prisma.blog.delete({
        where: {
            id: params.id   //FIXME: Error says number expected but string passed
        }
    })

    const updatedBlogs = await prisma.blog.findMany()

    return NextResponse.json({ data: updatedBlogs, message: 'Blog Deleted successfully' }, { status: 200, statusText: 'request successful'})
}