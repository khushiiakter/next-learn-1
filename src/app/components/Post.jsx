import Link from 'next/link';
import React from 'react'

const Post = ({post}) => {
    const {userId, title,body, id } = post;
  return (
    <div className="border border-white p-8 text-center">
      <h3 className="text-3xl">{id}</h3>
      <p className="text-xl">{title}</p>
     
      
      
        {/* <button className="btn">Details</button> */}
    
      <Link href={`/posts/${id}`}>
        <button className="btn">Details</button>
      </Link>
    </div>
  )
}

export default Post;