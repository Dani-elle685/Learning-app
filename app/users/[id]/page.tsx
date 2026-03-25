import React from 'react'
import { json } from 'stream/consumers'

interface Props {
  params: Promise<{
    id: string
  }>
}

const page = async ({ params }: Props) => {
    const { id } = await params

    const user = await fetch(`http://localhost:3000/api/users/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

    const userData = await user.json();
    
  return (
    <div>
        {/* <h1>User : {JSON.stringify(userData)}</h1> */}
        <pre>{JSON.stringify(userData, null, 2)}</pre>
    </div>
  )
}

export default page