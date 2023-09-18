import React from 'react'

interface Props {
  params: {
    slug: string[];
  };
  searchParams: {
    sortOrder: string;
  }
}

const ProductPage = ({ params: { slug }, searchParams: { sortOrder } }: Props) => {
  return (
    <div>
      <h1>ProductPage: {slug}</h1>
      <div>sortOrder: {sortOrder}</div>
    </div>
  )
}

export default ProductPage
