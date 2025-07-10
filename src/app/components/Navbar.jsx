import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="container mx-auto border p-5">
      <ul className="flex justify-center text-2xl gap-10">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/services">
          <li>Services</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
