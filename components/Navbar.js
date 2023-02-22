import Image from "next/image";
import React, { useState } from "react";
import navLogo from "public/assets/navLogo.png";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = (props) => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const navList = [
    { link: "/", title: "Home" },
    { link: "/#about", title: "About" },
    { link: "/#skills", title: "Skills" },
    { link: "/#projects", title: "Projects" },
    { link: "/#contact", title: "Contact" },
  ];
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-white">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image src={navLogo} width="100" height="50" alt="Logo" />
        </Link>
        <div>
          <ul className="hidden md:flex">
            {navList.map((item, index) => (
              <Link href={item.link} key={index}>
                <li className="ml-10 text-sm uppercase hover:border-b ">
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={20} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen  bg-black/70" : ""
        }
        onClick={handleNav}
      ></div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] lg:hidden h-screen bg-white p-10 ease-in duration-500 "
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div>
          <div className="flex w-full items-center justify-between">
            <Link href="/" onClick={handleNav}>
              <Image src={navLogo} width="100" height="35" alt="Logo" />
            </Link>
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="w-[85%] md:w-[90%] py-4">
              Let&apos;s build something Legendary Together
            </p>
          </div>
        </div>
        <div className="py-4 flex flex-col">
          <ul className="uppercase">
            {navList.map((item, index) => (
              <Link href={item.link} key={index} onClick={handleNav}>
                <li className="py-4 text-sm"> {item.title}</li>
              </Link>
            ))}
          </ul>
          <div className="pt-40">
            <p className="uppercase tracking-widest text-[#5651e5]">
              Let&apos;s Connect
            </p>
            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                <FaLinkedinIn />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                <FaGithub />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                <AiOutlineMail />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                <BsFillPersonLinesFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
