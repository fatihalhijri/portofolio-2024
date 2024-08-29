import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import NavMobile from "@/components/NavMobile";
import Price from "@/components/Price";
import Project from "@/components/Project";
import Reviews from "@/components/Reviews";
import Service from "@/components/Service";
import Skill from "@/components/Skill";
import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Homepage = () => {
  const [showNav,setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  useEffect(()=> {
    AOS.init({
      duration:1000,
      easing:'ease',
      once:true,
      anchorPlacement:'top-bottom'
    })
  })

  return (
    <div className="overflow-hidden  ">
      <NavMobile showNav={showNav} closeNav ={closeNavHandler} />
      <Nav open={showNavHandler} />
      <Hero/>
      <About/>
      <Service/>
      <Skill/>
      <Project/>
      <Price/>
      <Reviews/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Homepage;
