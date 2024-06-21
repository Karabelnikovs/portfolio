import React from "react";
import { scrollTo } from "../utils/scroll";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projectList = [
    {
      title: "Storage management app",
      description:
        "This full-stack application is made to manage data for a company. The app is managing workers, products, orders and purchase history. App has an admin mode. Laravel, Inertia, Tailwind",
      link: "https://github.com/Karabelnikovs/storage",
    },
    {
      title: "Video streaming service",
      description:
        "Full stack app, that has similar functionality to youtube. Video uploading, watching. Laravel, blade.",
      link: "https://github.com/Karabelnikovs/LaraTube",
    },
    {
      title: "Hotel management app",
      description:
        "This is full-stack app, that manages hotel. Here you can book a room for your trip. App has an admin mode. Laravel, Inertia, Tailwind",
      link: "https://github.com/Karabelnikovs/hotel-service",
    },
    {
      title: "Advanced task planning app",
      description:
        "Full-stack app for advanced task managment. You can plan your tasks more effectively with this app. PHP, MySQL, JavaScript, Tailwind",
      link: "https://github.com/Karabelnikovs/Tasks",
    },
  ];

  return (
    <div
      id="projects"
      className="py-16 bg-gray-200 text-gray-800 snap-start w-screen h-screen flex-shrink-0 h-full flex flex-col items-center justify-center"
    >
      <div className="container mx-auto px-4 flex flex-col items-center overflow-y-scroll md:overflow-hidden">
        <h2 className="text-4xl font-bold mt-8">My Projects</h2>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8 px-24 py-8">
          {projectList.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-lg mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                className="flex items-center justify-center"
              >
                <FaGithub size={25} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
