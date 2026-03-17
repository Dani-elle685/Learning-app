import Image from 'next/image';
import React from 'react'

type Article = {
  type_of: "article";
  id: number;
  title: string;
  description: string;
  url: string;
  tags: string;
  cover_image: string;
  reading_time_minutes: number;
  user: {
    name: string;
    username: string;
  };
  comments_count: number;
  public_reactions_count: number;
};

const page = async () => {
    // Currencyapi API Example
// Dev.to API Example
const response = await fetch('https://dev.to/api/articles', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
});

if (!response.ok) {
    throw new Error('Network response was not ok');
}

console.log(response)

const data: Article[] = await response.json();
console.log(data);
  return (
    <div>
        <div className='grid grid-cols-3 gap-4 container mx-auto'>
            {data.map((item, index) => (
                <div key={index} className='border rounded-md h-fit'>
                    <Image src={item?.cover_image!} alt={item.title} width={100} height={200} className='w-full '/>
                    <div className='pt-3 '>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default page