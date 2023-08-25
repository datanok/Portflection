"use client";
import Image from "next/image";
import { Suspense } from "react";
import { AiTwotoneCalendar } from "react-icons/ai";
import profile from "@public/assets/images/madhur.jpeg";
import { BsDash } from "react-icons/bs";
import project1 from "@public/assets/images/project1.png";
import project2 from "@public/assets/images/project2.png";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import jsonData from "../json-data.json";

const Page = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const userID = searchParams.get("id");
  console.log(userID);
  const [portfolioData, setPorfolioData] = useState({});

  useEffect(() => {
    const getPortfolio = async () => {
      const response = await fetch(`/api/portfolio/view/${userID}`);
      const data = await response.json();
      setPorfolioData(data);
    };
    if (userID) getPortfolio();
  }, [userID]);

  const [activeItem, setActiveItem] = useState("about");
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className=" flex flex-col gap-4 text-[#9a9a9a] z-30 h-screen ">
      <Suspense fallback={<p>Loading feed...</p>}>
        <Head>
          <title>{portfolioData.userName}</title>
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
                alt="image"
              />
              <h3>Hi, I'm {portfolioData.userName}</h3>
              <h1 className="text-xl font-bold bg-gradient-to-r from-[#9a9a9a] to-gray-400 bg-clip-text text-transparent">
                {portfolioData.role}
              </h1>
            </section>
            <div className="flex flex-col gap-5 text-2xl my-8">
              <a
                className="group flex items-center py-3"
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  handleItemClick("about");
                  document.querySelector("#about").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <span
                  className={`mr-4 h-px ${
                    activeItem === "about"
                      ? "w-16 bg-slate-200"
                      : "w-8 bg-slate-400"
                  }  transition-all group-hover:w-16 hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
                ></span>
                <span
                  className={`text-sm font-bold uppercase tracking-widest ${
                    activeItem === "about"
                      ? "text-slate-200"
                      : "text-slate-400 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                  }`}
                >
                  About
                </span>
              </a>
              <a
                className="group flex items-center py-3"
                href="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  handleItemClick("experience");
                  document.querySelector("#experience").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <span
                  className={`mr-4 h-px ${
                    activeItem === "experience"
                      ? "w-16 bg-slate-200"
                      : "w-8 bg-slate-400"
                  }  transition-all group-hover:w-16 hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
                ></span>
                <span
                  className={`text-sm font-bold uppercase tracking-widest ${
                    activeItem === "experience"
                      ? "text-slate-200"
                      : "text-slate-400 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                  }`}
                >
                  Experience
                </span>
              </a>
              <a
                className="group flex items-center py-3"
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  handleItemClick("projects");
                  document.querySelector("#projects").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <span
                  className={`mr-4 h-px ${
                    activeItem === "projects"
                      ? "w-16 bg-slate-200"
                      : "w-8 bg-slate-400"
                  }  transition-all group-hover:w-16 hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
                ></span>
                <span
                  className={`text-sm font-bold uppercase tracking-widest ${
                    activeItem === "projects"
                      ? "text-slate-200"
                      : "text-slate-400 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                  }`}
                >
                  Projects
                </span>
              </a>
            </div>
          </nav>
          {/* Mobile view */}
          <div className=" col-span-3 md:col-span-2">
            <section className="w-full flex md:hidden flex-col items-center gap-2">
              <Image
                src={jsonData.profileImage}
                width={100}
                height={100}
                className="rounded-full"
                alt="image"
              />
              <h3 className="md:font-bold">
                &#128075; Hi, I'm {portfolioData.userName}
              </h3>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-300 to-slate-600 bg-clip-text text-transparent">
                {portfolioData.role}
              </h1>
            </section>
            <div className="flex flex-col justify-center gap-8 " id="about">
              {/* About */}
              <section className="md:flex flex-col gap-2 mt-6 md:mt-60 md:h-screen md:py-12 slide-in">
                <h2 className=" uppercase text-xl md:text-3xl bg-gradient-to-r from-[#9a9a9a] to-gray-400 bg-clip-text text-transparent mb-6">
                  About
                </h2>
                <p className="text-slate-400 md:text-xl text-ellipsis">
                  {portfolioData.about}
                </p>
              </section>
              {/* Experince */}
              <section
                className="md:py-12 md:h-screen animate-fadeIn "
                id="experience"
              >
                <h2 className="uppercase text-xl md:text-3xl bg-gradient-to-r from-[#9a9a9a] to-gray-400 bg-clip-text text-transparent mb-6">
                  Experience
                </h2>

                <div className="container mx-auto">
                  <div className="grid gap-4 group">
                    {portfolioData.experiences?.map((experience, index) => (
                      <div
                        key={index}
                        className="p-2 md:text-lg flex flex-col md:flex-row gap-2 rounded-lg transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:hover:bg-gray-500/10 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg hover:bg-opacity-10 "
                      >
                        <p className=" min-w-fit text-thin text-slate-400">
                          {experience.tenure}
                        </p>
                        <div className="">
                          <h3 className="text-lg text-slate-200 group-hover:text-white">
                            {experience.company}
                          </h3>
                          <p className="text-slate-500 ">
                            {experience.designation}
                          </p>
                          <p className="text-slate-400 text-ellipsis">
                            {experience.accomplishments}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <section>
                <ol className="relative border-l border-gray-200 ">
                  {portfolioData.experiences?.map((experience, index) => (
                    <li className="mb-10 ml-6">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-slate-600 rounded-full -left-3 ring-2 ring-slate-600  ">
                        <AiTwotoneCalendar color="white " />
                      </span>
                      <h3 className="flex  gap-2 mb-1 text-md font-semibold text-slate-300 ">
                        <time className="">2022 - Present </time>
                        <span>&#8226;</span>
                        <span>Jio</span>
                      </h3>
                      <p className="mb-4 text-sm font-normal text-primary-gray ">
                        Get access to over 20+ pages including a dashboard
                        layout, charts, kanban board, calendar, and pre-order
                        E-commerce & Marketing pages.
                      </p>
                    </li>
                  ))}
                </ol>
              </section>
              {/* Projects */}
              <section
                id="projects"
                className="flex flex-col gap-4  h-screen py-12 animate-fadeIn"
              >
                <h1 className="uppercase text-xl md:text-3xl bg-gradient-to-r from-[#9a9a9a] to-gray-400 bg-clip-text text-transparent mb-6">
                  {jsonData.projectsSection.title}
                </h1>
                <div className="flex flex-col gap-4">
                  {portfolioData.projects?.map((project, index) => (
                    <>
                      <div
                        key={index}
                        className="text-lg grid grid-cols-5 grid-flow-row md:grid-flow-col gap-2 p-2 rounded-lg group transition motion-reduce:transition-none lg:-inset-x-6  lg:hover:bg-gray-500/10 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg hover:bg-opacity-10 "
                      >
                        <img
                          src={project?.projectImg}
                          loading="lazy"
                          width={200}
                          height={30}
                          alt="image"
                          className="rounded-lg col-span-3 order-3 md:col-span-1 md:order-1"
                        />
                        <div className="col-span-4 md:order-2 ">
                          <h2 className="text-md font-bold group-hover:text-white">
                            {project.projectName}
                          </h2>
                          <p className="text-sm text-slate-400 w-fit">
                            {project.projectDesc}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-2 flex-wrap">
                        {project.projectTags[0].split(",").map((tag) => (
                          <span className=" rounded-full  text-xs py-1 px-3 leading-5 bg-teal-400/10 text-teal-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default Page;