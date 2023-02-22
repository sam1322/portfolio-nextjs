/* eslint-disable react/no-unescaped-entities */
import { emailLink, githubLink, linkedInLink } from "constant/projectDetails";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
        <div className="flex flex-col items-center">
          {/* <div> */}
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let's Build Something Together
          </p>
          <h1 className="py-4 pb-2 text-gray-700 ">
            Hi, I'm <span className="text-[#5651e5]">Sriram</span>
          </h1>
          <h1 className=" text-gray-700 ">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-500 max-w-[70%] m-auto ">
            I'm a front-end web developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I'm focused on building responsive front-end web applications while
            learning back-end technologies.
          </p>
          <div className="flex items-center justify-between w-[250px] py-4 m-auto">
            <Link href={linkedInLink}>
              <div
                title="LinkedIn"
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 "
              >
                <FaLinkedinIn />
              </div>
            </Link>
            <Link href={githubLink}>
              <div
                title="Github"
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 "
              >
                <FaGithub />
              </div>
            </Link>
            <Link href={emailLink}>
              <div
                title="sriram.pant5@gmail.com"
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 "
              >
                <AiOutlineMail />
              </div>
            </Link>
            {/* <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <BsFillPersonLinesFill />
                </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
