import React from "react";
import { scrollTo } from "../utils/scroll";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <div className="bg-gray-900 text-white h-screen w-screen flex items-center justify-center snap-start flex-shrink-0">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Portfolio</h1>
        <p className="text-xl mb-8">
          Here you can see a small showcase of my abilities
        </p>
        <button className="bg-purple-500 px-4 py-2 rounded-xl hover:bg-purple-700 transform transition duration-300 hover:scale-110 cursor-pointer hover:shadow-xl">
          <a onClick={() => scrollTo("right", 2)}>View My Projects</a>
        </button>
      </div>

      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-purple-500 active:-translate-x-6 transition duration-300 hover:scale-125"
        onClick={() => scrollTo("left", 1)}
      >
        <IoIosArrowBack size={45} />
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-purple-500 active:translate-x-6 transition duration-300 hover:scale-125"
        onClick={() => scrollTo("right", 1)}
      >
        <IoIosArrowForward size={45} />
      </button>
    </div>
  );
};

export default Hero;
