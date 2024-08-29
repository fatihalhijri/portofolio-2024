import React from "react";
import ProjectCard from "./Helper/ProjectCard";

const Project = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900 ">
      <div className="text-center">
        <p className="heading__mini">Recent Work</p>
        <h1 className="heading__primary">
          My Best <span className="text-yellow-400">Projects</span>
        </h1>
      </div>
      <div className="">
        <ProjectCard
          title={"E-commerce Website"}
          tech1="React"
          tech2="NextJs"
          tech3="Tailwind"
          tech4="TypeScript"
          image="/images/p1.png"
        />
        <ProjectCard
          title={"Portofolio Website"}
          tech1="React"
          tech2="NextJs"
          tech3="Tailwind"
          tech4="TypeScript"
          image="/images/p2.png"
        />
        <ProjectCard
          title={"FullStack Food delivery Webapp"}
          tech1="React"
          tech2="NextJs"
          tech3="Node Js"
          tech4="MongoDB"
          image="/images/p3.png"
        />
        <ProjectCard
          title={"Travel Website"}
          tech1="React"
          tech2="NextJs"
          tech3="Node Js"
          tech4="TypeScript"
          image="/images/p4.png"
        />
      </div>
    </div>
  );
};

export default Project;
