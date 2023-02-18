import Image from "next/image";
import React from "react";
import html from "public/assets/skills/html.png";
import css from "public/assets/skills/css.png";
import javascript from "public/assets/skills/javascript.png";
import react from "public/assets/skills/react.png";
import tailwind from "public/assets/skills/tailwind.png";
import firebase from "public/assets/skills/firebase.png";
import github from "public/assets/skills/github.png";
import nextjs from "public/assets/skills/nextjs.png";
import node from "public/assets/skills/node.png";

const Skills = (props) => {
  const SkillList = [
    {logo: html, skill: "HTML"},
    {logo: css, skill: "CSS"},
    {logo: javascript, skill: "Javascript"},
    {logo: nextjs, skill: "Nextjs"},
    {logo: react, skill: "React"},
    {logo: node, skill: "Node"},
    {logo: tailwind, skill: "Tailwind"},
    {logo: firebase, skill: "Firebase"},
    {logo: github, skill: "Github"},
  ];
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">Skills</p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="w-[95%] m-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SkillList.map((item, index) => (
          <div key={index} className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={item.logo} alt="/" width="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>{item.skill}</h3>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
