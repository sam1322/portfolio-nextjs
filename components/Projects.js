/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ProjectItem from "./ProjectItem";
// import superChat from "public/assets/projects/superChat.png";
// import AmazonClone from "public/assets/projects/AmazonClone.png";
// import Advice from "public/assets/projects/Advice.png";
import { projectDetailsList } from "constant/projectDetails";

const Projects = () => {
  // const projectList = [
  //   {
  //     title: "Super Chat",
  //     backgroundImg:superChat,
  //     projectUrl: "https://github.com/sam1322/SuperChat",
  //     hostedUrl:"https://superchat-8dbfd.web.app/"
  //   },
  //   {
  //     title: "Amazon Clone",
  //     backgroundImg:AmazonClone,
  //     projectUrl: "https://github.com/sam1322/Amazon-clone",
  //     hostedUrl:"https://clone-faf47.web.app/"
  //   },
  //   {
  //     title: "Advice",
  //     backgroundImg:Advice,
  //     projectUrl: "https://github.com/sam1322/advice_project",
  //     hostedUrl:"https://gracious-benz-f77466.netlify.app/"
  //   },
  //  ];
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase">Projects</p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectDetailsList.map((item, index) => (
            <ProjectItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
