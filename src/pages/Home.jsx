import React, { Suspense } from "react";
import Hero from "../components/sections/Hero";
import Header from "../components/sections/Header";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Skills from "../components/sections/Skills";
import Education from "../components/sections/Education";
import Contact from "../components/sections/Contact";

const ProjectsShowCase = React.lazy(() =>
  import("../components/sections/ProjectsShowCase")
);
const Projects = React.lazy(() => import("../components/sections/Projects"));

const Home = () => {
  return (
    <>
      {/* <div id="home" className="header_hero_bg">
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
      </section> */}
      <section id="projects">
        <Suspense fallback={<div>Loading Projects Showcase...</div>}>
          <ProjectsShowCase />
        </Suspense>
        {/* <Suspense fallback={<div>Loading Projects...</div>}>
          <Projects />
        </Suspense> */}
      </section>
      {/* <section id="education">
        <Education />
      </section>
      <section id="contact">
        <Contact />
      </section> */}
    </>
  );
};

export default Home;
