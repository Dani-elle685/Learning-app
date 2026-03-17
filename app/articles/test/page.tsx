import Link from 'next/link';


export interface Post {
    id: number;
    title: string;
    content: string;
    author: string;
    date: string;
    category: string;
}

const page = async () => {

  const data = await fetch('https://api.vercel.app/blog', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
 
  const posts:Post[] = await data.json()

  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>Articles</h1>
      <div className='grid grid-cols-3 gap-4'>
        {posts.map((post) => (
          <>
          <div key={post.id} className='border p-4 rounded'>
            <h2 className='text-lg font-semibold mb-2'>{post.title} - {post.category}</h2>
            <p className='text-sm'>{post.content}</p>
            <p className='text-sm text-gray-600'>{post.author}</p>
            <p className='text-sm text-gray-500'>{post.date}</p>
            <Link href={`/articles/test/${post.id}`} className='text-blue-500 hover:underline'>Read More</Link>
          </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default page