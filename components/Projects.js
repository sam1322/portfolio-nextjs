/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const projectList = [
    {
      title: "Property Finder",
      backgroundImg: "/../public/assets/projects/property.jpg",
      // projectUrl: "/property",
      projectUrl: "/",
    },
    {
      title: "Crypto App",
      backgroundImg: "/../public/assets/projects/crypto.jpg",
      projectUrl: "/",
    },
    {
      title: "Netflix App",
      backgroundImg: "/../public/assets/projects/netflix.jpg",
      projectUrl: "/",
    },
    {
      title: "Twitch App",
      backgroundImg: "/../public/assets/projects/twitch.jpg",
      projectUrl: "/",
    },
  ];
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase">Projects</p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectList.map((item, index) => (
            <ProjectItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
