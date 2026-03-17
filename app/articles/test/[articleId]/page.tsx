
import { Post } from "../page";
import Link from "next/link";
import Button from "./Button";

interface Props {
  params: Promise<{
    articleId: string;
  }>;
}

const page = async ({ params }: Props) => {
  const { articleId } = await params;

  const data = await fetch(`https://api.vercel.app/blog/${articleId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const posts:Post = await data.json()
  return (
    <div>
        <Link href='/articles/test' className='text-blue-500 hover:underline'>Back to Articles</Link>
        <div>Single Article Page</div>
        <h2>POST ID: {posts.id}</h2>
        <h1 className='text-2xl font-bold mb-4'>{posts.title} - {posts.category}</h1>
        <p className='text-sm'>{posts.content}</p>
        <p className='text-sm text-gray-600'>{posts.author}</p>
        <p className='text-sm text-gray-500'>{posts.date}</p>

        <Button />
    </div>
  )
};

export default page;
