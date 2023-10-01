import { NextRequest, NextResponse } from "next/server"
import schema from '../schema'
import prisma from '@/prisma/client'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }) {
  const userId = parseInt(params.id)
  const user = await prisma.user.findUnique({
    where: { id: userId },
  })

  if (!user) {
    return NextResponse.json(
      { error: 'User not found', status: 404 },
    )
  } else {
    return NextResponse.json(user, { status: 200 })
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }) {
  const userID = params.id
  const body = await request.json()
  const validation = schema.safeParse(body)

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors }, { status: 400 },
    )
  }

  const user = await prisma.user.findUnique({
    where: { id: parseInt(userID) },
  })

  if (!user) {
    return NextResponse.json(
      { error: 'User not found' }, { status: 404 },
    )
  }

  const updatedUser = await prisma.user.update({
    where: { id: parseInt(userID) },
    data: {
      name: body.name,
      email: body.email,
    }
  })

  return NextResponse.json(
    updatedUser, { status: 204 }
  )
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }) {
  const userId = params.id

  const user = await prisma.user.findUnique({
    where: { id: parseInt(userId) },
  })

  if (!user) {
    return NextResponse.json(
      { error: 'User not found' }, { status: 404 },
    )
  }

  await prisma.user.delete({
    where: { id: parseInt(userId) },
  })

  return NextResponse.json(
    { status: 204 },
  )
}
