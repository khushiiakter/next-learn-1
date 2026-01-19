import Link from "next/link";
import React from "react";

const Service = ({ service }) => {
  const { id, price, description, title, icon } = service;
  return (
    <div className="border border-violet-200/20 p-8 text-center">
      <h3 className="text-3xl">{id}</h3>
      <p className="text-xl">{title}</p>
      <p>{description}</p>
      <button>{price}</button>
      <Link href={`/services/${id}`}>
        <button className="btn">Details</button>
      </Link>
    </div>
  );
};

export default Service;
