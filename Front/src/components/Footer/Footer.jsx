"use client"

import Image from "next/image";
import React from "react";
import Instagram from "../../../public/Social-Media/instagram.png";
import Facebook from "../../../public/Social-Media/facebook.png";
import Twitter from "../../../public/Social-Media/gorjeo.png";
import Linkedin from "../../../public/Social-Media/linkedin.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Footer() {
  const rute = usePathname();

  return (
    <footer className={rute==="/" ? "text-white px-6 flex justify-between items-center" : "text-gray-950 px-6 flex justify-between items-center"}>
      <span>
        <p>© 2023 Staywish</p>
      </span>
      <span className="flex items-center">
        <Link href="https://www.linkedin.com/in/tomasguignet/" target="_blank">
          <Image className="w-8 h-8 mx-4" src={Linkedin} alt="Linkedin" />
        </Link>
        <Link href="https://www.instagram.com/tomiguignet/" target="_blank">
        <Image className="w-9 h-9 mx-1" src={Instagram} alt="Instagram" />
        </Link>
        <Image className="w-8 h-8 mx-1" src={Facebook} alt="Facebook" />
        <Image className="w-8 h-8 mx-1" src={Twitter} alt="Twitter" />
      </span>
    </footer>
  );
}

export default Footer;
