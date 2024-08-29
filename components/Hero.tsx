import React from "react";
import TypeWrite from "./Helper/TypeWrite";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-[100vw] pt-[4vh] md:pt-[12vh] h-[85vh] md:h-[100vh] costum-bg">
      <div className="flex justify-center flex-col w-[80%] h-[100%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem]  items-center ">
          <div className="text-[#c4cfde]">
            <h1 data-aos="fade-right">WELCOME TO MY POTOFOLIO</h1>
            <div data-aos="fade-left" data-aos-delay="400">
              <h1 className="xl:text-[50px] lg:text-[40px] sm:text-[35px]  text-[25px] font-semibold leading-[2.6rem] text-white  ">
                Hi.Im <span className="text-yellow-300">Fathi</span>
              </h1>
              <TypeWrite></TypeWrite>
            </div>
            <p data-aos="fade-up" data-aos-delay="1200"  className="mt-[1.2rem] text-[15px] md:text-17 text-[#c4cfde] ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              officia saepe adipisci id ab, vero qui iure praesentium ducimus
              assumenda provident voluptate, maxime voluptatibus vitae obcaecati
              reiciendis sit esse fuga.
            </p>
            <div className="mt-[2rem] flex items-center space-x-6  ">
              <button data-aos="zoom-in" data-aos-delay="1200" className="relative flex h-[50px] w-40 items-center font-semibold justify-center overflow-hidden bg-red-500 text-white  shadow-2xl  transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56  ">
                <span className="relative z-10">Hire Me</span>
              </button>
              <button data-aos="zoom-out" data-aos-delay="1600"
                className="before:ease relative h-12 w-40 
              shadow-2xl overflow-hidden bg-orange-600 text-white font-semibold  before:absolute before:left-0 before:-ml-2  before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-green-700 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180"
              >
                <span className="relative z-10">Download CV</span>
              </button>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-delay="2000" className="hidden md:block ">
            <Image
              src={"/images/hero.png"}
              alt="hero"
              width={700}
              height={700}
              className="object-contain "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
