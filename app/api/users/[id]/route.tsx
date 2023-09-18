import { NextRequest, NextResponse } from "next/server"
import schema from '../schema'

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }) {
  const userID = params.id
  if (userID > 10) {
    return NextResponse.json(
      { error: 'User not found', status: 404 },
    )
  } else {
    return NextResponse.json(
      { id: userID, name: 'John Doe' },
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }) {
  const userID = params.id
  const body = await request.json()
  const validation = schema.safeParse(body)
  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors }, { status: 400 },
    )
  } else {
    return NextResponse.json(
      { id: userID, name: body.name }, { status: 204 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }) {
  const userID = params.id

  return NextResponse.json(
    { id: userID, deleted: true }, { status: 204 },
  )
}
