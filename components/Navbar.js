import Image from "next/image";
import React from "react";
import navLogo from "public/assets/navLogo.png";
import Link from "next/link";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

const Navbar = (props) => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-white">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src={navLogo} width="75" height="50" alt="Logo" />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b ">Home </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b ">About </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b ">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b ">Projects </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b ">Contact </li>
            </Link>
          </ul>
          <div className="md:hidden">
            <AiOutlineMenu size={20} />
          </div>
        </div>
      </div>
      <div className="fixed left-0 top-0 w-full h-screen  bg-black/70">
        <div className=" fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] lg:hidden h-screen bg-white p-10 ease-in duration-500 ">
          <div>
            <div className="flex w-full items-center justify-between">
              <Image src={navLogo} width="60" height="35" alt="Logo" />
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">Let&apos;s build something Legendary Together</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
