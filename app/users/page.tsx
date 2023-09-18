import React from 'react'
import UsersTable from './UsersTable'
import Link from 'next/link'
import { Suspense } from 'react'

interface Props {
  searchParams: {
    sortOrder: string;
  }
}

const Users = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <div>
      <h1>Users</h1>
      <Link href='users/new' className='btn btn-primary'>Add user</Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UsersTable sortOrder={sortOrder} />
      </Suspense>
    </div>
  )
}

export default Users
