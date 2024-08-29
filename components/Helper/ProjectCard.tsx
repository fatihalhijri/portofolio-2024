import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  tech1: string;
  tech2: string;
  tech3: string;
  tech4: string;
  image: string;
}

const ProjectCard = ({ title, tech1, tech2, tech3, tech4, image }: Props) => {
  return (
    <div className="grid w-[80%] mx-auto pt-[5rem] grid-cols-1 lg:grid-cols-2 items-center">
      <div className="p-4  rounded-xl relative cursor-pointer hover:-rotate-6 transform transition-all duration-100">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="object-contain  rounded-xl mx-auto shadow-md"
        ></Image>
      </div>
      <div>
        <h1 className="text-[25px] text-white ">
          <p className="text-white  opacity-65 text-[15px] mt-[1rem] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            labore nisi optio, excepturi qui amet. Excepturi non deleniti
            exercitationem unde aliquid repellendus, dignissimos fugiat magni
            iure hic ratione, vero et?
          </p>
        </h1>
        <div className="mt[1.3rem] grid-cols-2 grid sm:grid-cols-3 xl:grid-cols-4 gap-[2rem]  ">
          <h1 className="px-6 py-3 bg-blue-700 text-white rounded-lg text-center">
            {tech1}
          </h1>
          <h1 className="px-6 py-3 bg-white text-black rounded-lg text-center">
            {tech2}
          </h1>
          <h1 className="px-6 py-3 bg-sky-500 text-black rounded-lg text-center">
            {tech3}
          </h1>
          <h1 className="px-6 py-3 bg-blue-500 text-white rounded-lg text-center">
            {tech4}
          </h1>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;
