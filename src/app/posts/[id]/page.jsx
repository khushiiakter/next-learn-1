import React from "react";

export const metadata = {
  title: "PostDetails",
  
};

const getPostsDetails = async ({ id }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};
const PostDetails = async ({ params }) => { 
  // const p = await params;
  const { id } = params;
  // console.log(p.id);
  // const postDetail = await getPostsDetails({p.id});
  const postDetail = await getPostsDetails({ id });
  console.log(postDetail);
  return (
    <>
      <div className=" border p-6 max-w-2/3 mx-auto">
        <h3 className="text-3xl">{postDetail.id}</h3>
        <p>{postDetail.body}</p>
      </div>
    </>
  );
};

export default PostDetails;
