import Image from "next/image";

import React from "react";

const Feautre = () => {
  return (
    <div className="my-12">
      <h1 className="text-6xl xl:px-16 xl:text-8xl">
        <b>Hey, Vahid here!</b> Discover my stories and creative ideas.
      </h1>
      <div className="flex-center mt-24 flex-col gap-5 md:flex-row md:gap-20">
        <div className="flex-center relative h-96 w-full flex-1">
          <Image
            src="/Images/postImage.jpg"
            alt=""
            height={500}
            width={500}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col gap-5">
          <h2 className="text-3xl font-bold">Post Title</h2>
          <p className="text-lg text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
            ullam earum nulla possimus perferendis dicta nemo veritatis porro
            nesciunt ipsum voluptate ad nam assumenda. Nesciunt sapiente
            voluptatum repudiandae aut autem.
          </p>
          <button className="w-fit rounded border-0 bg-indigo-500 px-5 py-4 text-base text-white hover:bg-indigo-600">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feautre;
