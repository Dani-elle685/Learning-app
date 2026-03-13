"use client";

import Link from 'next/link'
import React from 'react'
//props
interface Props {
    name:string, // required prop
    description?:string // optional prop
}


const Services = ({name, description}:Props) => {   
    const data =[
        {
            id:1,
            name:"Service 1",
            description:"Service 1 description",
            slug:"service-1",
            // image:"https://picsum.photos/id/10/200/300"
        },
        {
            id:2,
            name:"Service 2",
            description:"Service 2 description",
            slug:"service-2",
            // image:"https://picsum.photos/id/10/200/300"
        },
        {
            id:3,
            name:"Service 3",
            description:"Service 3 description",
            slug:"service-3",
            // image:"https://picsum.photos/id/10/200/300"
        }
    ]
  return (
    <div>
        <div>name:   {name}</div>
        {data.map((item,index)=>{
            return (
                <div key={index} className="flex flex-col items-center justify-center border p-5 m-5">
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <Link href={`/services/${item.slug}`}>Read More</Link>
                </div>
            )
        })}
    </div>
  )
}

export default Services