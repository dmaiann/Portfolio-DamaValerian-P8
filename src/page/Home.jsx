import Hero from "../component/Hero.jsx";
import About from "../component/About.jsx";
import Project from "../component/Project.jsx";
import Services from "../component/Service.jsx";
import Contact from "../component/Contact.jsx";
import Footer from "./Footer.jsx";

import React from "react";

export default function Home() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="project">
        <Project />
      </section>

      <section id="service">
        <Services />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}
