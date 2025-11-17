import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom"; 

const ProjectCard = ({
  title,
  img = "",
  problem,
  solution,
  techStacks = [],
  github,
  contributedAs,
  readMoreLink, 
}) => {
  return (
    <div className=" mx-auto">
      <div className="flex flex-col md:flex-row w-full cursor-pointer rounded-md border border-gray-100/20 shadow-md shadow-gray-200/10 bg-gray-900 text-white overflow-hidden hover:shadow-xl transition-all duration-300">

        {/* IMAGE */}
        <div className="md:w-1/2 w-full h-48 md:h-auto select-none">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover select-none"
            loading="lazy"
          />
        </div>

        {/* TEXT */}
        <div className="flex flex-col gap-4 md:w-1/2 w-full p-6">

          {/* Title */}
          <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>

          {/* Contributed As */}
          {contributedAs && (
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-blue-300">Contributed As</h3>
              <p className="text-gray-300">{contributedAs}</p>
            </div>
          )}

          {/* Problem */}
          <div className="space-y-2 max-h-40 overflow-hidden">
            <h3 className="text-xl font-semibold text-red-300">The Problem</h3>
            <p className="text-gray-300">
              {problem.length > 200 ? problem.slice(0, 200) + "..." : problem}
            </p>
          </div>

          {/* Solution */}
          <div className="space-y-2 max-h-40 overflow-hidden">
            <h3 className="text-xl font-semibold text-green-300">The Solution</h3>
            <p className="text-gray-300">
              {solution.length > 200 ? solution.slice(0, 200) + "..." : solution}
            </p>
          </div>

          {/* Tech Stacks */}
          <div>
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">
              Tech Stacks
            </h3>
            <div className="flex flex-wrap gap-2">
              {Array.isArray(techStacks)
                ? techStacks.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800 text-sm rounded-md border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))
                : techStacks}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mt-3">
            {/* GitHub Button */}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-600 rounded-md hover:bg-gray-700 transition-all duration-200"
              >
                <FaGithub size={20} />
                <span className="text-sm font-medium">View on GitHub</span>
              </a>
            )}

            {/* Read More Button */}
            {readMoreLink && (
              <a
                to={"#001"}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md text-sm font-medium transition-all duration-200"
              >
                Read More
              </a>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
