import React from 'react'

const getPostsDetails = async ({id})=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data;
}
const PostDetails = async ({params}) => {
    const p = await params;
    console.log(p.id);
    const postDetail = await getPostsDetails(p.id);
    console.log(postDetail);
  return (
   <>

    <h3>{postDetail.id}</h3>
    <p>{postDetail.body}</p>
   </>
    
  )
}

export default PostDetails;