import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog Page",
    description: "Blog Page of the Next.js App"
}

type Post = {
    id: number;
    title: string;
    body?: string;
}

export default async function BlogPage() {
    const res = await fetch("http://localhost:3000/api/posts")

    if(!res.ok) {throw new Error("Failed to fetch posts")}

    const posts: Post[] = await res.json()

    return (
        <main>
            <h1>Blog Page</h1>
            
            {posts.map((post) => (
                <article key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </article>
            ))}
        </main>
    )


}