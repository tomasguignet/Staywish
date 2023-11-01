import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <nav className="flex max-h-60 p-4 items-center text-slate-100 ">
      <div className="text-3xl ml-4 mr-14 ">
        <Link href="/">
          <h1>Staywish</h1>
        </Link>
      </div>
      <div className="container max-w-full flex justify-between pt-2 mr-3 text-base">
        <ul className="flex flex-row">
          <li className="mr-8">
            <Link href="/properties">Properties</Link>
          </li>
          <li className="mr-8">
            <Link href="/popular">Popular</Link>
          </li>
          <li className="mr-8">
            <Link href="/about">About us</Link>
          </li>
        </ul>
        <ul className="flex flex-row">
          <li className="mr-10">
            <Link href="/rent-your-home">Rent your home</Link>
          </li>
          <li>
            <Link href="/profile">
              <img src="scs" alt="Profile" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
