"use client";
import Image from "next/image";
import heroimg from "../public/summit-hero.jpg"



export default function Home() {
  return (
    <div >
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Image
        src={heroimg}
        alt="Hero Image"
        className="dark:invert"
        width={1000}
        height={240}
        priority
      />
    </div>
  );
}
