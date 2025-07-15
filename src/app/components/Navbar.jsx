"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
// import { requestFormReset } from "react-dom";

const Navbar = () => {
   const pathname = usePathname();
    const hideNav = pathname?.includes("dashboard");// || pathname === "/not-found"
    if(!hideNav){
       return (
      <div className="container mx-auto border p-5">
        <ul className="flex justify-center text-xl gap-6">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/services">
            <li>Services</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/user-dashboard">
            <li>Dashboard-User</li>
          </Link>
          <Link href="/about2">
            <li>About2</li>
          </Link>
          <Link href="/posts">
            <li>Posts</li>
          </Link>
          <Link href="/users">
            <li>Users</li>
          </Link>
          <Link href="/meals">
            <li>Meals</li>
          </Link>
          <Link href="/register">
            <li>Register</li>
          </Link>
        </ul>
      </div>
    )} else {
    return <></>;
  }
};

export default Navbar;
