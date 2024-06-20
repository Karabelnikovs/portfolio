import React from "react";
import { scrollTo } from "../utils/scroll";

const About = () => {
  return (
    <div
      id="about"
      className="bg-gray-200 py-16 text-gray-800 snap-start h-screen w-screen flex-shrink-0"
    >
      <div className="container mx-auto px-10 h-full flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg w-96 text-center mt-6">
          I am a student with experience in building web applications using
          technologies like React, Laravel, Tailwind, MySQL and more. I love
          learning new languages and frameworks and creating projects with them.
        </p>
      </div>
    </div>
  );
};

export default About;
