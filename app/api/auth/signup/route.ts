import { NextResponse } from "next/server"
import bcrypt from 'bcrypt'
import prisma from "@/configs/prisma"

export async function POST(req: Request) {
    const { name, email, password } = await req.json()

    const hashedPassword = await bcrypt.hash(password, 10)
    const user = {
        name,
        email,
        password: hashedPassword
    }
    try {
        await prisma.user.create({ data: user })
        return NextResponse.json({ message: 'Sign Up Success!!' }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ message: 'Sign Up Failed!!' }, { status: 400 })

    }
}