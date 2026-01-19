import Link from "next/link";
import React from "react";

const User = ({ user }) => {
  const { id, name, username, email, phone, website } = user;
  return (
    <div className="glass-card p-6 hover:scale-105 transition-all duration-300 group text-center">
      <div className="mb-6">
        <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-xl font-bold text-white">{name.charAt(0)}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-violet-300 transition-colors">{name}</h3>
        <p className="text-sm opacity-75 mb-1">@{username}</p>
        <p className="text-xs opacity-60">{email}</p>
      </div>
      <div className="space-y-2 mb-6 text-sm">
        <p className="opacity-80">📞 {phone}</p>
        <p className="opacity-80">🌐 {website}</p>
      </div>
      <Link href={`/users/${id}`}>
        <button className="btn btn-gradient w-full rounded-full font-semibold">
          View Profile
        </button>
      </Link>
    </div>
  );
};

export default User;
