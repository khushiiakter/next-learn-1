import React from 'react'
import Post from '../components/Post';

export const metadata = {
  title: "Posts",
  
};
const getPosts = async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data;
}
const Posts =async () => {
    const posts = await getPosts();
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold gradient-text mb-4">Latest Posts</h1>
          <p className="text-xl opacity-90">Discover {posts.length} amazing articles</p>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mt-4 rounded-full"></div>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
           {
            posts.map((post)=>
               <Post key={post.id} post={post}></Post>
            )
           }
        </div>
      </div>
    )
}

export default Posts;
