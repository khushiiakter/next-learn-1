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
    console.log(posts);
  return (
    <div>
        <h1>Posts:  {posts.length}</h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
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