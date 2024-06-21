import React from "react";
import { scrollTo } from "../utils/scroll";

const About = () => {
  return (
    <div
      id="about"
      className="bg-gray-200 py-16 text-gray-800 snap-start h-screen w-screen flex-shrink-0 mt-4"
    >
      <div className="container mx-auto h-full flex flex-col items-center justify-center w-2/3">
        <h2 className="text-4xl font-bold mt-8">About Me</h2>
        <p className="text-lg text-center mt-6">
          I am a student with experience in building web applications using
          technologies like React, Laravel, Tailwind, MySQL and more. I love
          learning new languages and frameworks and creating projects with them.
        </p>
      </div>
    </div>
  );
};

export default About;
