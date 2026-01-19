"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
   const pathname = usePathname();
    const hideNav = pathname?.includes("dashboard");
    if(!hideNav){
       return (
      <nav className="glass-card mx-4 mt-4 mb-8">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold gradient-text animate-float">
              NextApp
            </Link>
            <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
              <Link href="/" className="hover:text-violet-300 transition-colors duration-300">
                <li>Home</li>
              </Link>
              <Link href="/posts" className="hover:text-violet-300 transition-colors duration-300">
                <li>Posts</li>
              </Link>
              <Link href="/users" className="hover:text-violet-300 transition-colors duration-300">
                <li>Users</li>
              </Link>
              <Link href="/meals" className="hover:text-violet-300 transition-colors duration-300">
                <li>Meals</li>
              </Link>
              <Link href="/todos" className="hover:text-violet-300 transition-colors duration-300">
                <li>Todos</li>
              </Link>
              <Link href="/services" className="hover:text-violet-300 transition-colors duration-300">
                <li>Services</li>
              </Link>
              <Link href="/payments" className="hover:text-violet-300 transition-colors duration-300">
                <li>Payments</li>
              </Link>
              <Link href="/about" className="hover:text-violet-300 transition-colors duration-300">
                <li>About</li>
              </Link>
            </ul>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="btn btn-sm btn-gradient">
                Login
              </Link>
              <Link href="/signup" className="btn btn-sm btn-outline border-violet-200/30 text-violet-100 hover:bg-violet-100 hover:text-violet-900">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )} else {
    return <></>;
  }
};

export default Navbar;
