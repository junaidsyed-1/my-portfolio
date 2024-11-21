import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { Element } from "react-scroll";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <Navbar />
      <Element name="home">
        <Hero />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="experience">
        <Experience />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      {/* <Element name="about">
        <About />
      </Element> */}
      <Element name="contact">
        <Contact />
      </Element>
    </>
  );
}

export default App;
