"use client";

import Hero from "@/components/Hero";
import skills from "@/components/Skills";
import contact from "@/components/Contact";
import About from "@/components/About";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react"
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";



export default function Home () {
  useEffect (() =>{
    Aos.init({
      easing:"ease-out-back",
      duration:1200,
      delay:100,
      mirror:true,
      anchorPlacement:"bottom-bottom",
      offset:160,
    });
    Aos.refresh()
  }, []);
  return (
    <main>
      <Hero />
      <Skills />
      <Contact />
      <About />
      <Footer />
      

      
    </main>
  );
}


