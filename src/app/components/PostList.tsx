"use client";
import { useState } from "react";

interface Post {
    id: number;
    title: string
}

interface PostListProps {
    posts: Post[]
}

export default function PostList({ posts } : PostListProps) {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <section className="mt-4">
      <button 
        className="bg-blue-500 text-white px-3 py-1 rounded"
        onClick={() => setShow(!show)}
      >
        {show ? "Hide Posts" : "Show Posts"}
      </button>

      <button 
        className="ml-2 bg-green-500 text-white px-3 py-1 rounded"
        onClick={() => setCount(count + 1)}
      >
        Clicked {count} times
      </button>

      {show && (
        <ul className="mt-3 list-disc pl-5">
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
