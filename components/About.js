import Link from "next/link";
import React from "react";
import AboutImg from 'public/assets/about.jpg';
import Image from "next/image";
const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div>
          {/* <div className='col-span-2'> */}
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
          <h2 className="py-4">Who I am </h2>
          <p className="py-2 text-gray-600">
            I have spent the last entire year in front end development mainly in react while
            studying college. Currently working as a front end developer in a startup called
            Vasitum. Currently using Reactjs and Nextjs in front end technologies. Also side by side
            learning tailwind css.
          </p>
          <p className="py-2 text-gray-600">
            Though I am most proficient in building front-end applications using HTML, CSS,
            Javascript, and React, I am a quick learner and can pick up new tech stacks as needed. I
            believe that being a great developer is not using one specific language, but choosing
            the best tool for the job.
            <br />I am also familiar with backend technologies such as Java and Springboot.
          </p>
          <Link href='/projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-[80%] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/'  />
        </div>
      </div>
    </div>
  );
};

export default About;
