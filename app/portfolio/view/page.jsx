"use client";
import Image from "next/image";
import { Suspense } from "react";
import {
  AiTwotoneCalendar,
  AiOutlineArrowLeft,
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import jsonData from "../json-data.json";
const Footer = () => {
  return (
    <>
      <footer className="flex justify-between m-2 p-2 md:hidden">
        <span className="">
          Created With
          <a href="" className="text-slate-300 mx-1 hover:text-white">
            Portflection
          </a>
        </span>
        <div className="flex gap-4 justify-center">
          <a href="github.com" className="hover:text-white">
            <AiFillGithub size={24} />
          </a>
          <a href="linkedin.com" className="hover:text-white">
            <AiFillLinkedin size={24} />
          </a>
          <a href="linkedin.com" className="hover:text-white">
            <AiFillInstagram size={24} />
          </a>
        </div>
      </footer>
    </>
  );
};

const Page = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const userID = searchParams.get("id");

  const [portfolioData, setPorfolioData] = useState({});

  useEffect(() => {
    console.log("workng");
    const getPortfolio = async () => {
      const response = await fetch(`/api/portfolio/view/${userID}`);
      const data = await response.json();
      setPorfolioData(data);
      console.log(data);
    };
    if (userID) getPortfolio();
  }, [userID]);

  const [activeItem, setActiveItem] = useState("about");
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="flex flex-col gap-4 text-[#9a9a9a] z-30 h-screen ">
      <Suspense fallback={<p>Loading feed...</p>}>
        <Head>
          <title>{portfolioData.userName}</title>
        </Head>
        <div className="grid grid-cols-3">
          {/* Navigation */}
          <nav className="w-full flex-col hidden md:flex md:sticky md:top-0 md:max-h-screen md:justify-between  md:flex-col  md:py-12">
            <section
              id="home"
              className=" w-full flex flex-col items-start lg:items-center gap-2"
            >
              <Image
                src={jsonData.profileImage}
                width={100}
                height={100}
                className="rounded-full"
                alt="image"
              />
              <h3 className="lg:text-3xl md:text-xl font-bold capitalize">
                {portfolioData.userName}
              </h3>
              <h1 className="lg:text-xl md:text-sm font-bold bg-gradient-to-r from-[#9a9a9a] to-gray-400 bg-clip-text text-transparent">
                {portfolioData.role}
              </h1>
            </section>
            <div className="flex flex-col gap-5 text-2xl md:mb-56">
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
                  className={`text-sm font-bold capitalize tracking-widest ${
                    activeItem === "about"
                      ? "text-slate-200"
                      : "text-primary-gray group-hover:text-slate-200 group-focus-visible:text-slate-200"
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
                  className={`text-sm font-bold capitalize tracking-widest ${
                    activeItem === "experience"
                      ? "text-slate-200"
                      : "text-primary-gray group-hover:text-slate-200 group-focus-visible:text-slate-200"
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
                  className={`text-sm font-bold capitalize tracking-widest ${
                    activeItem === "projects"
                      ? "text-slate-200"
                      : "text-primary-gray group-hover:text-slate-200 group-focus-visible:text-slate-200"
                  }`}
                >
                  Projects
                </span>
              </a>
            </div>
            <div className="flex gap-4 justify-center">
              <a href="github.com" className="hover:text-white">
                <AiFillGithub size={24} />
              </a>
              <a href="linkedin.com" className="hover:text-white">
                <AiFillLinkedin size={24} />
              </a>
              <a href="linkedin.com" className="hover:text-white">
                <AiFillInstagram size={24} />
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
              <section className="md:flex flex-col gap-2 mt-6 md:mt-40 md:h-screen md:py-12 slide-in">
                <h2 className="text-lg font-medium uppercase tracking-widest bg-gradient-to-r from-[#9a9a9a] to-gray-400 bg-clip-text text-transparent mb-6">
                  About
                </h2>
                <p className="text-primary-gray md:text-xl text-ellipsis">
                  {portfolioData.about}
                </p>
              </section>
              {/* Experince */}
              <section
                className="md:py-12 md:h-screen animate-fadeIn "
                id="experience"
              >
                <h2 className="text-lg font-medium uppercase tracking-widest bg-gradient-to-r from-[#9a9a9a] to-gray-400 bg-clip-text text-transparent mb-6">
                  Experience
                </h2>
                <div className="container mx-2 md:mx-auto">
                  <ol className="relative border-l border-gray-500/30">
                    {portfolioData.experiences?.map((experience, index) => (
                      <li
                        className="pb-10 pl-6 transition motion-reduce:transition-none group lg:hover:bg-gray-500/10 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg hover:bg-opacity-10"
                        key={index}
                      >
                        <span className="absolute group-hover:bg-slate-300 flex items-center justify-center w-6 h-6 bg-gray-500/10 rounded-full -left-3 ring-2 ring-gray-500/30  ">
                          <AiTwotoneCalendar className="group-hover:text-black" />
                        </span>

                        <h3 className="flex  gap-2 mb-1 text-md font-semibold text-gray-400 group-hover:text-white ">
                          <time className="">{experience.tenure}</time>
                          <span>&#8226;</span>
                          <span>{experience.company}</span>
                        </h3>
                        <p>{experience.designation}</p>
                        <p className="mb-4 text-sm font-normal text-primary-gray ">
                          {experience.accomplishments}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
                {/* Skills */}
                <section className="md:py-12 py-10 animate-fadeIn " id="skills">
                  <h2 className="text-lg font-medium uppercase tracking-widest bg-gradient-to-r from-[#9a9a9a] to-gray-400 bg-clip-text text-transparent mb-6">
                    Skills
                  </h2>
                  {console.log(portfolioData)}
                  {console.log(typeof portfolioData.skills)}
                  {/* <div className="flex gap-4 flex-wrap">
                    {portfolioData.skills.split(",").map((skill, index) => (
                      <span className="text-sm uppercase outline outline-gray-500 rounded-full p-1 px-2 bg-primary-gray text-gray-300 bg-opacity-20 backdrop-blur-lg ">
                        {skill}
                      </span>
                    ))}
                  </div> */}
                </section>
              </section>

              {/* Projects */}
              <section
                id="projects"
                className="flex flex-col gap-4  md:h-screen py-12 animate-fadeIn"
              >
                <h1 className="text-lg font-medium uppercase tracking-widest bg-gradient-to-r from-[#9a9a9a] to-gray-400 bg-clip-text text-transparent mb-6">
                  Projects
                </h1>
                <div className="flex flex-col sm:mx-2 gap-4">
                  {portfolioData.projects?.map((project, index) => (
                    <>
                      <div
                        key={index}
                        className="text-lg grid grid-cols-6 grid-flow-row gap-2 p-2 rounded-lg group transition motion-reduce:transition-none lg:-inset-x-6  lg:hover:bg-gray-500/10 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg hover:bg-opacity-10 "
                      >
                        <img
                          src={project?.projectImg}
                          loading="lazy"
                          width={200}
                          height={30}
                          alt="image"
                          className="rounded-lg col-span-6 order-2 md:col-span-2 md:order-1"
                        />
                        <div className="col-span-6 md:order-2 order-1 md:col-span-3">
                          <h2 className="text-md font-bold group-hover:text-white">
                            {project.projectName}
                          </h2>
                          <p className="text-sm text-primary-gray w-fit">
                            {project.projectDesc}
                          </p>
                        </div>
                        <div className="flex gap-2 flex-wrap col-span-6  order-3">
                          {project.projectTags.split(",").map((tag) => (
                            <span className=" rounded-full  text-xs py-1 px-3 leading-5 bg-teal-400/10 text-teal-300">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </Suspense>
      <Footer />
    </div>
  );
};

export default Page;
