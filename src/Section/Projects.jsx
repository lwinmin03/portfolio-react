import React from "react";
import ProjectCard from "../components/ui/ProjectCard";
import ava from "../assets/Project Sample.png";
import { img } from "motion/react-client";
import Stack from "../components/ui/Stack";
const Projects = () => {
  const Projects = [
    {
      id: 1,
      img: ava,
      title: "OPOM",
      solution:
        "OPOM provides a collaborative platform where developers can work together to build real projects within one month. It connects juniors, beginners, and mid-level developers, allowing them to share ideas, join teams, and develop complete applications from start to finish. The platform offers project approval, teamwork features, developer profiles, and portfolio integration—giving users hands-on experience, stronger portfolios, improved confidence, and valuable networking opportunities.",

      problem:
        "Many developers, especially juniors, learn and work separately without real collaboration experience. This makes it difficult for them to build complete, real-world projects and create strong portfolios. There is also no simple platform where developers can share ideas, join teams, and work together effectively. Mid-level developers face similar challenges, as they often lack opportunities to enhance their skills, explore new technologies, or mentor others in a structured environment",
      techStacks: ["React", "Spring Boot", "Axios"],
      github: "View",
      contributedAs: "Frontend Team Lead",
      readMoreLink: "readMoreLink",
    },

    {
      id: 2,
      title: "E-commerce Platform",
      img: "https://images.unsplash.com/photo-1519183071298-a2962b5c7b12?q=80&w=500&auto=format",
      problem:
        "Small businesses need an online platform to sell products efficiently.",
      solution:
        "Developed a full-stack e-commerce application with product listings, shopping cart, and payment integration.",
      techStacks: ["Node.js", "Express", "MongoDB", "React"],
      github: "https://github.com/sample/e-commerce-platform",
      contributedAs: "Fullstack Developer",
      readMoreLink: "/projects/e-commerce-platform",
    },

    {
      id: 3,
      title: "Chat Application",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=500&auto=format",
      problem:
        "Users need a real-time messaging platform for team collaboration.",
      solution:
        "Built a real-time chat application with WebSocket support and user authentication.",
      techStacks: ["React", "Node.js", "Socket.IO", "PostgreSQL"],
      github: "https://github.com/sample/chat-application",
      contributedAs: "Backend Developer",
      readMoreLink: "/projects/chat-application",
    },
  ];
  return (
    <div className="w-full h-full flex flex-col justify-between gap-6 ">
      <h2 className="text-xl font-medium">My Recent Projects</h2>

      <div className="w-full flex justify-center items-center h-full">
        <Stack cardsData={Projects} />
      </div>
    </div>
  );
};

export default Projects;
