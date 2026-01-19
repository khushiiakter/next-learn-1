import Link from 'next/link';
import React from 'react'

const Post = ({post}) => {
    const {userId, title, body, id } = post;
  return (
    <div className="glass-card p-6 hover:scale-105 transition-all duration-300 group">
      <div className="flex items-center justify-between mb-4">
        <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          #{id}
        </span>
        <span className="text-xs opacity-60">User {userId}</span>
      </div>
      <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-violet-300 transition-colors">
        {title}
      </h3>
      <p className="text-sm opacity-80 mb-6 line-clamp-3">{body}</p>
      <Link href={`/posts/${id}`}>
        <button className="btn btn-gradient w-full rounded-full font-semibold">
          Read More →
        </button>
      </Link>
    </div>
  )
}

export default Post;
