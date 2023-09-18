import React from 'react'
import Link from 'next/link'
import { sort } from 'fast-sort'

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const sortBy = (direction: string, items: User[]) => {
  if (direction === 'name') {
    return (
      sort(items).asc(item => item.name)
    )
  } else if (direction === 'email') {
    return (
      sort(items).asc(item => item.email)
    )
  } else
    return (
      sort(items).asc(item => item.name)
    )
}

const UsersTable = async ({ sortOrder }: Props) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();
  const sortedUsers = sortBy(sortOrder, users)

  return (
    <table className='table table-zebra'>
      <thead>
        <tr>
          <th><Link href='users?sortOrder=name'>Name</Link></th>
          <th><Link href='users?sortOrder=email'>Email</Link></th>
        </tr>
      </thead>
      <tbody>
        {
          sortedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default UsersTable
