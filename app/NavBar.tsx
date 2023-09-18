import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className='flex justify-end my-5 bg-slate-200'>
      <nav className='p-5'>
        <Link href='/'>Home</Link>
      </nav>
      <nav className='p-5'>
        <Link href='/users'>Users</Link>
      </nav>
      <nav className='p-5'>
        <Link href='/products'>Products</Link>
      </nav>
    </div>
  )
}

export default NavBar
