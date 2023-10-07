'use client';
import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <div className='flex justify-end my-5 bg-slate-200 space-x-3'>
      <nav className='p-5'>
        <Link href='/'>Home</Link>
      </nav>
      <nav className='p-5'>
        <Link href='/users'>Users</Link>
      </nav>
      <nav className='p-5'>
        <Link href='/products'>Products</Link>
      </nav>

      {status === 'loading' && <div>Loading...</div>}
      {
        status === 'authenticated' &&
        <div>{session.user!.name}</div>
      }
      {
        status === 'unauthenticated' &&
        <nav className='p-5'>
          <Link href='/api/auth/signin'>Sign in</Link>
        </nav>
      }
    </div>
  )
}

export default NavBar
