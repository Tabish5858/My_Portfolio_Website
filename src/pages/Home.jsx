import React from "react";
import ProjectsShowCase from "../components/sections/ProjectsShowCase";
import Hero from "../components/sections/Hero";
import Header from "../components/sections/Header";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Skills from "../components/sections/Skills";
import Education from "../components/sections/Education";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

const Home = () => {
  return (
    <>
      <div id="home" className="header_hero_bg">
        <Header />
        <Hero />
      </div>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <ProjectsShowCase />
        <Projects />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
