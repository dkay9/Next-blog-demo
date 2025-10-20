import type { Metadata } from "next"
// import { metadata } from "../layout"

export const metadata: Metadata = {
    title: "About Blog Page",
    description: "Next.js About Page"
}

export default function AboutPage() {
    return (
        <h1>About Page</h1>
    )
}