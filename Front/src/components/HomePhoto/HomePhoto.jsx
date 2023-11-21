import React from "react";
import home from "../../../public/casa-6.jpg";
import Image from "next/image";

function HomePhoto() {
  return (
    <div className="mx-auto flex items-center flex-col m-8 relative">
      <div className="max-w-screen-xl mx-4 mb-3">
        <Image className="rounded-2xl" src={home} alt="HomePhoto" />
      </div>

      <div className="md:absolute static flex flex-col items-center bottom-10">
        <h2 className="text-gray-100 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">Not sure where to go? Perfect.</h2>
        <div className="flex mt-5 opacity-90 hover:opacity-70 transition-opacity">
          <button className="md:py-2 md:px-7 py-2 px-5 rounded-md bg-gray-100 text-black lg:text-lg text-base font-medium ">
            {"I'm flexible"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePhoto;
