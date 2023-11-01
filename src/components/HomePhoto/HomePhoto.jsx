import React from "react";
import home from "../../../public/casa-6.jpg";
import Image from "next/image";

function HomePhoto() {
  return (
    <div className="mx-auto flex items-center flex-col m-8">
      <div className="max-w-screen-xl mx-4">
        <Image className="rounded-2xl max-w-full" src={home} alt="HomePhoto" />
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-gray-100">Not sure where to go? Perfect.</h2>
        <div className="flex">
          <button className="p-1 bg-gray-100 text-black">
            {"I'm flexible"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePhoto;
