import { NextRequest, NextResponse } from "next/server";
import schema from '../../../products/[[...slug]]/schema';
import prisma from '@/prisma/client'

export async function GET(request: NextRequest,
  { params }: { params: { slug: string[] } }) {
  const slug = params.slug.join('/');
  const products = await prisma.product.findMany({ where: { name: { contains: slug } } });

  return NextResponse.json(
    products, { status: 200 },
  );
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors }, { status: 400 },
    )
  }

  const product = await prisma.product.create({
    data: {
      name: body.name,
      description: body.description,
      price: body.price,
    }
  })

  return NextResponse.json(
    product, { status: 201 },
  )
}
