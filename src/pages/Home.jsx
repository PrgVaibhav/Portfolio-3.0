import "../styles/Home.scss";
import { AboutMe } from "../components/AboutMe";
import { Experience } from "../components/Experience";
import { Freelancing } from "../components/Freelancing";
import { Projects } from "../components/Projects";
import { Socials } from "../components/Socials";
import { useEffect, useState } from "react";
import { Updates } from "../components/Updates";
export const Home = () => {
  return (
    <div className="home-container">
      <div className="greeting">
        <span>नमस्ते 🙏 </span>
      </div>
      <AboutMe />
      <Experience />
      <Freelancing />
      <Projects />
      <Updates />
      <Socials />
    </div>
  );
};
