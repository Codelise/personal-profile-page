"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function About() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#projects") {
      setTimeout(() => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <main className="flex-1 px-8 py-4">
        <section className="mt-12 mb-12">
          <h2 className="text-white text-3xl font-['Bitcount_Prop_Single'] font-medium px-4 animate-pulseTitle">
            ABOUT ME
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-1 gap-4 p-4  transition-all duration-800">
            {[
              {
                label: "Address",
                value: "1908 Lundberg Lane, Old Cabalan Olongapo City",
              },
              { label: "Birthday", value: "March 7, 2005" },
              {
                label: "Hobbies",
                value: "Cycling, Gym, Gaming, Coding, Diecast Collecting",
              },
              { label: "School", value: "Gordon College" },
              {
                label: "Program",
                value: "Bachelor of Science in Information Technology",
              },
              { label: "Year", value: "3rd Year" },
            ].map((item, index) => (
              <div
                key={index}
                className="border-t border-[#3c4253] py-5 grid grid-cols-1 md:grid-cols-2  hover:bg-[#3c4253]/20 hover:rounded-lg transition-all group"
              >
                <p className="text-white text-xl relative font-['Bitcount_Prop_Single']  transition-colors group-hover:after:content-[''] group-hover:after:absolute  group-hover:after:h-0.5 group-hover:after:bottom-[-3px] group-hover:after:left-0 group-hover:after:bg-[#00bcd4] group-hover:after:transition-all">
                  {item.label}
                </p>
                <p className="text-white text-lg transition-all group-hover:text-[#00bcd4] group-hover:translate-x-1">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 mb-12">
          <h2 className="text-white text-3xl font-['Bitcount_Prop_Single'] font-medium px-4 animate-glow">
            SKILLS
          </h2>
          <div className="flex flex-wrap gap-2 p-4 transition-all duration-800">
            <span
              className="flex items-center gap-2 bg-[#292d38] py-2 px-4 rounded-lg opacity-0 animate-fadeUp transition-all hover:bg-gradient-to-br hover:from-[#00c4ff] hover:to-[#0077ff] hover:text-white hover:scale-110 hover:shadow-lg cursor-default"
              style={{ animationDelay: "0.3s" }}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML"
                className="w-5 h-5 transition-transform hover:rotate-12 hover:scale-120"
              />
              HTML
            </span>
            <span
              className="flex items-center gap-2 bg-[#292d38] py-2 px-4 rounded-lg opacity-0 animate-fadeUp transition-all hover:bg-gradient-to-br hover:from-[#00c4ff] hover:to-[#0077ff] hover:text-white hover:scale-110 hover:shadow-lg cursor-default"
              style={{ animationDelay: "0.6s" }}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS"
                className="w-5 h-5 transition-transform hover:rotate-12 hover:scale-120"
              />
              CSS
            </span>
            <span
              className="flex items-center gap-2 bg-[#292d38] py-2 px-4 rounded-lg opacity-0 animate-fadeUp transition-all hover:bg-gradient-to-br hover:from-[#00c4ff] hover:to-[#0077ff] hover:text-white hover:scale-110 hover:shadow-lg cursor-default"
              style={{ animationDelay: "0.9s" }}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                className="w-5 h-5 transition-transform hover:rotate-12 hover:scale-120"
              />
              JavaScript
            </span>
            <span
              className="flex items-center gap-2 bg-[#292d38] py-2 px-4 rounded-lg opacity-0 animate-fadeUp transition-all hover:bg-gradient-to-br hover:from-[#00c4ff] hover:to-[#0077ff] hover:text-white hover:scale-110 hover:shadow-lg cursor-default"
              style={{ animationDelay: "1.2s" }}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
                className="w-5 h-5 transition-transform hover:rotate-12 hover:scale-120"
              />
              React
            </span>
            <span
              className="flex items-center gap-2 bg-[#292d38] py-2 px-4 rounded-lg opacity-0 animate-fadeUp transition-all hover:bg-gradient-to-br hover:from-[#00c4ff] hover:to-[#0077ff] hover:text-white hover:scale-110 hover:shadow-lg cursor-default"
              style={{ animationDelay: "1.5s" }}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                alt="Node.js"
                className="w-5 h-5 transition-transform hover:rotate-12 hover:scale-120"
              />
              Node.js
            </span>
            <span
              className="flex items-center gap-2 bg-[#292d38] py-2 px-4 rounded-lg opacity-0 animate-fadeUp transition-all hover:bg-gradient-to-br hover:from-[#00c4ff] hover:to-[#0077ff] hover:text-white hover:scale-110 hover:shadow-lg cursor-default"
              style={{ animationDelay: "1.8s" }}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                alt="SQL"
                className="w-5 h-5 transition-transform hover:rotate-12 hover:scale-120"
              />
              SQL
            </span>
            <span
              className="flex items-center gap-2 bg-[#292d38] py-2 px-4 rounded-lg opacity-0 animate-fadeUp transition-all hover:bg-gradient-to-br hover:from-[#00c4ff] hover:to-[#0077ff] hover:text-white hover:scale-110 hover:shadow-lg cursor-default"
              style={{ animationDelay: "2.1s" }}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                alt="PHP"
                className="w-5 h-5 transition-transform hover:rotate-12 hover:scale-120"
              />
              PHP
            </span>
          </div>
        </section>

        <section id="projects" className="mb-12 scroll-mt-20">
          <h2 className="text-white text-3xl font-['Bitcount_Prop_Single'] font-medium px-4 animate-glow">
            PROJECTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4">
            {[
              {
                title: "JLGIS: School Inventory System",
                description: "A web application for managing school Inventory.",
                tech: "Tech Stack: HTML, CSS, JS, PHP, MySQL",
                image: "/assets/projects/School Inventory System.png",
              },
              {
                title: "QuickScan: Lost and Found",
                description:
                  "A web app where people can search their lost items or post a lost item.",
                tech: "Tech Stack: HTML, CSS, JS, Firebase, Cloudinary, OpenClip, Python",
                image: "/assets/projects/Lost and Found.png",
              },
              {
                title: "Library Management System",
                description: "A web app that's like an online library",
                tech: "Tech Stack: HTML, CSS, JS, PHP, MYSQL",
                image: "/assets/projects/Library Management System.png",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-[#373b47] p-4 rounded-xl transform translate-y-8 transition-all duration-600 hover:translate-y-0 hover:opacity-100 group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className="aspect-video bg-cover bg-center rounded-lg mb-3 transition-transform duration-400 group-hover:scale-105 group-hover:shadow-lg"
                  style={{ backgroundImage: `url('${project.image}')` }}
                ></div>
                <h3 className="text-white text-xl font-medium mb-2 transition-colors group-hover:text-[#4da3ff]">
                  {project.title}
                </h3>
                <p className="text-white font-['Montserrat'] text-sm mb-2">
                  {project.description}
                </p>
                <p className="text-white font-['Montserrat'] text-sm opacity-70">
                  {project.tech}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
