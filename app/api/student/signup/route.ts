import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'
import { NextRequest } from 'next/server'

const connectionString = `${process.env.DATABASE_URL}`

const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
export const prisma = new PrismaClient({ adapter })


export async function GET() {
    // const data = await prisma.user.findMany()
   
    return Response.json({ 
      message: "test"
    })
  }

// export async function POST(NextRequest: NextRequest) {
//   const data = NextRequest.body

//   return Response.json(data)
// }