'use client';
import React from 'react'
import { useRouter } from 'next/navigation'

const NewUser = () => {
  const router = useRouter()

  return (
    <div>
      <div>New User</div>
      <button onClick={() => router.push('/users')} className='btn btn-primary'>Create</button>
    </div>
  )
}

export default NewUser
