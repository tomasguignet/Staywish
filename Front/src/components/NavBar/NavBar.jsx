"use client"

import React from "react";
import Link from "next/link";
import perfil from "../../../public/usuario1.png";
import Image from "next/image";
import { usePathname } from "next/navigation";


function NavBar() {
  const rute = usePathname();

  return (
    <nav className={rute==="/" ? "flex max-h-60 p-4 pt-3 items-center text-slate-100" : "flex max-h-60 p-4 pt-3 items-center text-gray-950 font-medium"}>
      <div className="text-3xl ml-4 mr-14 ">
        <Link href="/">
          <h1>Staywish</h1>
        </Link>
      </div>
      <div className="container max-w-full flex justify-between pt-2 mr-3 text-base">
        <ul className="flex flex-row items-center">
          <li className="mr-8">
            <Link href="/homes-search">Properties</Link>
          </li>
          <li className="mr-8">
            <Link href="/popular">Popular</Link>
          </li>
          <li className="mr-8">
            <Link href="/about">About us</Link>
          </li>
        </ul>
        <ul className="flex flex-row items-center">
          <li className="mr-10">
            <Link href="/rent-your-home">Rent your home</Link>
          </li>
          <li>
            <Link href="/profile">
              <Image className="w-11 h-11" src={perfil} alt="Profile" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
