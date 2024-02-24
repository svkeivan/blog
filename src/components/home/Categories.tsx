import Image from "next/image";
import Link from "next/link";
import React from "react";

const Category = () => {
  return (
    <Link
      href={"/blog"}
      className="flex-center w-full gap-3 rounded-lg bg-orange-400 px-5 py-3 font-semibold transition-all hover:bg-orange-600 hover:text-gray-200"
    >
      <div className="relative size-10 overflow-hidden rounded-full">
        <Image src="/Images/Categories/coding.png" alt="Coding" fill />
      </div>
      <h2>Coding</h2>
    </Link>
  );
};

const Categories = () => {
  return (
    <div className="my-16">
      <h1 className="my-5 text-3xl font-semibold">Popular Categories</h1>

      <div className="flex items-center justify-start gap-5">
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  );
};

export default Categories;
