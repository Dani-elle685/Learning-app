import React from 'react'

interface Props {
  params: Promise<{
    slug: string
  }>
}


const page =  async ( {params}:Props) => {
    const {slug} = await params
    console.log(slug)
  return (
    <div>Slug page</div>
  )
}

export default page