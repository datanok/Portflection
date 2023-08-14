"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Expletus_Sans } from "next/font/google";
import { AiOutlineMenu } from "react-icons/ai";

const ExpletusSans = Expletus_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
});

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex flex-row justify-between p-3 w-full mb-16">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="assets/images/rlogo.svg"
          className="object-contain"
          width={30}
          height={30}
        />
        <p
          className={
            ExpletusSans.className + " text-lg hidden md:flex font-extrabold"
          }
        >
          Portflection
        </p>
      </Link>

      {/* DESKTOP Navigation*/}
      <div className="hidden md:flex">
        <div className="flex gap-3 md:gap-5">
          <Link href="/create">Create</Link>
          <Link href="/profile">Profile</Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden relative">
        <button onClick={() => setToggle(!toggle)}>
          <AiOutlineMenu size={24} />
        </button>
        {toggle && (
          <div className="dropdown outline">
            <Link href="/create" className="dropdown_link">
              Create
            </Link>
            <Link href="/profile" className="dropdown_link">
              Profile
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
