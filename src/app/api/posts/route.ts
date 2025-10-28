import { NextResponse } from "next/server";

const posts = [
  { id: 1, title: "Hello Next.js", body: "Welcome to the future of React apps." },
  { id: 2, title: "API Routes Simplified", body: "How to use route handlers in Next.js." },
  { id: 3, title: "Server Components FTW", body: "Server-first React architecture." },
];

// GET — read
export async function GET() {
  return NextResponse.json(posts);
}

// POST — create
export async function POST(req: Request) {
  try {
    const data = await req.json(); // parse body
    const newPost = {
      id: posts.length + 1,
      title: data.title,
      body: data.body,
    };

    posts.push(newPost);

    return NextResponse.json({ message: "Post created successfully!", post: newPost });
  } catch (error) {
    console.error("POST ERROR:", error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
