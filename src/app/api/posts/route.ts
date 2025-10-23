import { NextResponse } from "next/server";

export async function GET() {
    const posts = [
        { id: 1, title: "Hello Next.js", body: "Welcome to the future of React apps." },
        { id: 2, title: "API Routes Simplified", body: "How to use route handlers in Next.js." },
        { id: 3, title: "Server Components FTW", body: "Server-first React architecture." },
    ]

    return NextResponse.json(posts);
}