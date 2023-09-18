import React from 'react'
import AddToCart from './AddToCart'

interface Todo {
  title: string;
}

const ProductCard = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const todo: Todo = await res.json();
  console.log(todo);
  return (
    <div>
      <div>ProductCard</div>
      <div>
      </div>
      <div>
        {todo.title}
      </div>
      <AddToCart />
    </div>
  )
}



export default ProductCard
