import { NextRequest, NextResponse } from "next/server";
import schema from './schema';

export function GET(request: NextRequest) {
  return NextResponse.json(
    [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' },
    ]
  );
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors }, { status: 400 },
    )
  } else {
    return NextResponse.json(
      { id: 3, name: body.name }, { status: 201 },
    )
  }
}
