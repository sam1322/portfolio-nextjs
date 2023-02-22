import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { projectDetailsList } from "constant/projectDetails";

const netflix = (props) => {
  //   const title = "NetFpplication in React JS and is hosted on GitHub pages.This app features user authentication with firebase as well as the firestore cloud storage database. This application is pulling movie  data from an the IMDB movie API and displaying different categories.It features horizontal sliding and a featured selection. The useContext hook is also being implemented for app-wide state management.";

  const { pageProps } = props;

  const { title, code, subTitle, projectImg, description, demo, techStack } =
    props;

  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        {/* <div className='object-cover'> */}
        <Image
          className="absolute z-1"
          objectFit="cover"
          fill={true}
          src={projectImg.src}
          alt="/"
        />

        {/* </div> */}
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">{title}</h2>
          <h3>{subTitle}</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>{description}</p>
          <Link href={code} target="_blank">
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </Link>
          <Link href={demo} target="_blank">
            <button className="px-8 py-2 mt-4">Demo</button>
          </Link>
        </div>
        {Array.isArray(techStack) && (
          <div className="h-fit col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
            <p className="text-center font-bold pb-2 ">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 pl-4">
              {techStack.map((item, index) => (
                <p key={index} className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> {item}
                </p>
              ))}
            </div>
          </div>
        )}
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    // paths: [{ params: { project: "superchat" } }],
    paths: projectDetailsList.map((item) => ({
      params: { project: item.name },
    })),
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const project = params?.project;
  const details = projectDetailsList.find((val) => val.name === project);

  if (details) {
    return {
      props: {
        ...details,
      },
    };
  }
  return { notFound: true };
}

export default netflix;
