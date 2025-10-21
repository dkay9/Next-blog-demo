import PostList from "./components/PostList";

export default async function Home() {
  const posts = await fetch("http://jsonplaceholder.typicode.com/posts").then(res => res.json())
  
  return (
    <main>
      <h1>Hydration Demo</h1>
      <p>This content was rendered on the server.</p>

      <PostList posts={posts.slice(0, 5)} />    
    </main>
  );
}
