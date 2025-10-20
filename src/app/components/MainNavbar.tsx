import Link from 'next/link';

export default function MainNavbar() {
  return (
    <nav className="p-4 border-b flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
    </nav>
  );
}