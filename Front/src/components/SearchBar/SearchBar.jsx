"use client";
import React from "react";
import { usePathname } from "next/navigation";

const estilo = "flex max-w-full px-4 justify-center mt-6";

function SearchBar() {
  const rute = usePathname();

  return (
    <div className="flex max-w-full px-4 justify-center mt-6">
      <form
        className={
          rute === "/"
            ? "flex max-w-full bg-white p-2 rounded-full text-sm md:text-base"
            : "flex max-w-full bg-white p-2 rounded-full text-sm md:text-base border border-gray-300 shadow-md"
        }
        action=""
      >
        <div className="w-2/6 mr-3 ml-3 border-r-2">
          <label className="block pl-1" htmlFor="Location">
            Location
          </label>
          <input
            name="Location"
            className="block pl-1 bg-white text-inherit outline-none"
            placeholder="Where are you going?"
          />
        </div>

        <div className="w-48 mr-3 ml-3 pr-2 border-r-2">
          <label className="block pl-1" htmlFor="Check-in">
            Check-in
          </label>
          <input
            name="Check-in"
            className="block pl-1 bg-white text-inherit outline-none"
            placeholder="Add dates"
            type="date"
          />
        </div>

        <div className="w-48 mr-3 ml-3 pr-2 border-r-2">
          <label className="block pl-1" htmlFor="Check-out">
            Check-out
          </label>
          <input
            name="Check-out"
            className="block pl-1 bg-white text-inherit outline-none"
            placeholder="Add dates"
            type="date"
          />
        </div>

        <div className="w-28 md:w-36 ml-3 ">
          <label className="block pl-1" htmlFor="Guests">
            Guests
          </label>
          <input
            name="Guests"
            className="block pl-1 bg-transparent text-inherit outline-none"
            placeholder="Add guests"
            type="number"
          />
        </div>

        <div className="flex align-middle">
          <button className="bg-blue-950 rounded-full w-14">
            <div className="text-xl text-gray-100">
              <p className="font-semibold text-3xl pb-1">➜</p>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
