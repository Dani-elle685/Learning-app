import Image from 'next/image';
import React from 'react'
import { ArticleCard } from './ArticleCard';

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

const response = await fetch('https://dev.to/api/articles', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
});

if (!response.ok) {
    throw new Error('Network response was not ok');
}

const data: Article[] = await response.json();

  return (
    <div>
  <div className="grid grid-cols-3 gap-4 container mx-auto">
    {data.map((item, index) => (
      <ArticleCard
        key={index}
        title={item.title}
        description={item.description}
        image={item.cover_image}
      />
    ))}
  </div>
</div>
  )
}

export default page
