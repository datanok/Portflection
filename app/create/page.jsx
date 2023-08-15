"use client";
import Image from "next/image";
import profile from "@public/assets/images/madhur.jpeg";
import { BsDash } from "react-icons/bs";
import project1 from "@public/assets/images/project1.png";
import project2 from "@public/assets/images/project2.png";
import Head from "next/head";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import jsonData from "./json-data.json";

const Page = () => {
  const router = useRouter();

  // const cookieStore = cookies();
  // console.log(cookies);
  // console.log(cookieStore.get("portfolioData"));
  // const portfolioData = JSON.parse(data);
  const data = JSON.parse(localStorage.getItem("portfolioData"));
  console.log(typeof data);
  const [activeItem, setActiveItem] = useState("about");
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className=" flex flex-col gap-4 text-slate-400 z-30 p-6">
      <Head>
        <title>{data.userName}</title>
      </Head>
      <div className="grid grid-cols-3">
        {/* Navigation */}
        <nav className="w-full flex-col hidden md:flex md:sticky md:top-0 md:max-h-screen  md:flex-col md:justify-start md:py-24">
          <section
            id="home"
            className=" w-full flex flex-col items-center gap-2"
          >
            <Image
              src={jsonData.profileImage}
              width={100}
              height={100}
              className="rounded-full"
            />
            <h3>Hi, I'm ok {data.userName}</h3>
            <h1 className="text-xl font-bold bg-gradient-to-r from-slate-300 to-slate-600 bg-clip-text text-transparent">
              {data.role}
            </h1>
          </section>
          <div className="flex flex-col gap-5 text-2xl my-8">
            <a
              className="group flex items-center py-3"
              href="#about"
              onClick={() => handleItemClick("about")}
            >
              <span
                className={`mr-4 h-px ${
                  activeItem === "about"
                    ? "w-16 bg-slate-200"
                    : "w-8 bg-slate-800"
                } w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
              ></span>
              <span
                className={`text-sm font-bold uppercase tracking-widest ${
                  activeItem === "about"
                    ? "text-slate-200"
                    : "text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                }`}
              >
                About
              </span>
            </a>
            <a
              className="group flex items-center py-3"
              href="#experience"
              onClick={() => handleItemClick("experience")}
            >
              <span
                className={`mr-4 h-px ${
                  activeItem === "experience"
                    ? "w-16 bg-slate-200"
                    : "w-8 bg-slate-500"
                } w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
              ></span>
              <span
                className={`text-sm font-bold uppercase tracking-widest ${
                  activeItem === "experience"
                    ? "text-slate-200"
                    : "text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                }`}
              >
                Experience
              </span>
            </a>
            <a
              className="group flex items-center py-3"
              href="#projects"
              onClick={() => handleItemClick("projects")}
            >
              <span
                className={`mr-4 h-px ${
                  activeItem === "projects"
                    ? "w-16 bg-slate-200"
                    : "w-8 bg-slate-500"
                } w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
              ></span>
              <span
                className={`text-sm font-bold uppercase tracking-widest ${
                  activeItem === "projects"
                    ? "text-slate-200"
                    : "text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                }`}
              >
                Projects
              </span>
            </a>
          </div>
        </nav>
        {/* Mobile view */}
        <div className=" col-span-3 md:col-span-2">
          <section
            id="home"
            className="w-full flex md:hidden flex-col items-center gap-2"
          >
            <Image
              src={jsonData.profileImage}
              width={100}
              height={100}
              className="rounded-full"
            />
            <h3>&#128075; Hi, I'm {data.userName}</h3>
            <h1 className="text-2xl font-black bg-gradient-to-r from-slate-300 to-slate-600 bg-clip-text text-transparent">
              {data.role}
            </h1>
          </section>
          {/* About */}
          <section className="" id="about">
            <h2 className="text-xl bg-gradient-to-r from-slate-300 to-slate-600 bg-clip-text text-transparent mb-6">
              About
            </h2>
            <p className="text-slate-500 text-ellipsis">{data.about}</p>
          </section>
          {/* Experince */}
          <section className="py-12 md:h-screen" id="experience">
            <h2 className="text-xl bg-gradient-to-r from-slate-300 to-slate-600 bg-clip-text text-transparent mb-6">
              Experience
            </h2>
            <div className="container mx-auto">
              <div className="grid gap-4">
                {data.experiences?.map((experience, index) => (
                  <div
                    key={index}
                    className="hover:bg-[#1A1A1A] flex flex-col md:flex-row gap-2 md:gap-2 p-2"
                  >
                    <p className="min-w-fit text-thin text-slate-500">
                      {experience.tenure}
                    </p>
                    <div>
                      <h3 className="text-lg">{experience.company}</h3>
                      <p className="text-slate-600 ">
                        {experience.designation}
                      </p>
                      <p className="text-slate-500 text-ellipsis">
                        {experience.accomplishments}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Projects */}
          <section id="projects" className="flex flex-col gap-4 h-screen">
            <h1 className="text-xl bg-gradient-to-r from-slate-300 to-slate-600 bg-clip-text text-transparent">
              {jsonData.projectsSection.title}
            </h1>

            <div className="flex flex-col gap-4">
              {jsonData.projectsSection.projects.map((project, index) => (
                <>
                  <div
                    key={index}
                    className="grid grid-cols-5 grid-flow-row md:grid-flow-col gap-2 rounded-lg"
                  >
                    <Image
                      src={project.image}
                      width="200"
                      height="500"
                      className="rounded-lg col-span-3 order-3 md:col-span-2 md:order-1"
                    />
                    <div className="col-span-4 md:order-2">
                      <h2 className="text-md font-bold">{project.title}</h2>
                      <p className="text-sm text-slate-500 w-fit">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className=" rounded-full  text-xs py-1 px-3 leading-5 bg-teal-400/10 text-teal-300">
                      React
                    </span>
                  </div>
                </>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Page;
