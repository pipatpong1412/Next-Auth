import { getServerSession } from 'next-auth/next'
import { NextApiRequest, NextApiResponse } from 'next'
import { authOptions } from '../auth/[...nextauth]/route'

export async function GET(req: Request,) {
    const session = await getServerSession(authOptions)

    return Response.json({
        message: session,
    })
}