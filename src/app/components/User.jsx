import Link from "next/link";
import React from "react";

const User = ({ user }) => {
  const { id, name, username } = user;
  return (
    <div className="border border-white p-8 text-center">
      <h3 className="text-3xl">Id:{id}</h3>
      <p className="text-xl">Name: {name}</p>
    <p className="text-xl font-bold"><span className="text-violet-700">USername:</span> {username}</p>
      <Link href={`/users/${id}`}><button className="btn">Details</button></Link>

      {/* <Link href={`/posts/${id}`}>
        <button className="btn">Details</button>
      </Link> */}
    </div>
  );
};

export default User;
