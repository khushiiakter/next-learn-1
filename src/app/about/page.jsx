"use client";

import { useRouter } from "next/navigation";
import React from "react";

const About = () => {
  const router = useRouter();
  const login = true;
  const handleNavigate = () => {
    if (login) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  };
  return (
    <>
      <div className="text-5xl">About</div>
      <button className="btn btn-primary my-4" onClick={handleNavigate}>
        Address btn
      </button>
    </>
  );
};

export default About;
