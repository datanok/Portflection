"use client";
import Image from "next/image";
import PortfolioLoading from "@components/skeleton/PortfolioLoading";
import {
  AiTwotoneCalendar,
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineLink,
} from "react-icons/ai";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { getPortfolio } from "@components/redux/Action";
import NotFoundPage from "@app/portfolio/view/NotFoundPage";

const Page = (props) => {
  const { getPortfolio, loading } = props;
  const { data: session } = useSession();
  const router = useRouter();

  const searchParams = useSearchParams();
  const userID = searchParams.get("id");

  useEffect(() => {
    getPortfolio(userID, {
      meta: {
        noAlert: true, // Set meta info to not show alert
      },
    });
  }, [userID]);

  useEffect(() => {
    document.title = props.portfolioData?.userName;
  }, [props.portfolioData?.userName]);

  const [activeItem, setActiveItem] = useState("about");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <>
      <div className="main">
        <div className="gradient" />
      </div>
      <button
        className="md:sticky w-fit left-10 top-10 text-[#9a9a9a] hover:text-slate-200"
        onClick={() => router.back()}
      >
        <BsFillArrowLeftCircleFill size={24} />
      </button>
      <div className="flex flex-col gap-4  text-[#9a9a9a] md:-my-[2em] z-30">
        {loading ? (
          <PortfolioLoading />
        ) : props.portfolioData &&
          props.portfolioData.hasOwnProperty("success") &&
          !props.portfolioData.success ? (
          <NotFoundPage />
        ) : (
          <div className="w-full  flex justify-center max-w-screen-xl max-h-screen py-12 md:px-12 md:py-0 lg:px-24 lg:py-0">
            {/* Navigation */}
            <nav className="w-full md:w-[40%] flex-col hidden md:flex md:sticky md:max-h-screen md:my-0 md:py-8 md:justify-between md:flex-col ">
              <section
                id="home"
                className=" w-full flex flex-col items-start md:items-center gap-2"
              >
                <Image
                  src={props.portfolioData?.profileImg}
                  width={100}
                  height={100}
                  className="rounded-full"
                  alt="Profile Image"
                  loading="lazy"
                />
                <h3 className="md:font-bold">
                  &#128075; Hi, I'm {props.portfolioData?.userName}
                </h3>
                <h1 className="text-xl  bg-gradient-to-r from-slate-300 to-slate-600 bg-clip-text text-transparent">
                  {props.portfolioData?.role}
                </h1>
              </section>
              <div className="hidden  gap-5 text-2xl  md:flex flex-col ">
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
                        ? "w-16 bg-slate-200 "
                        : "w-8 bg-slate-400"
                    }  transition-all group-hover:w-16 hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
                  ></span>
                  <span
                    className={`text-sm font-bold capitalize tracking-widest ${
                      activeItem === "experience"
                        ? "text-slate-200 text-lg"
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
                        ? "text-slate-200 text-lg"
                        : "text-primary-gray group-hover:text-slate-200 group-focus-visible:text-slate-200"
                    }`}
                  >
                    Projects
                  </span>
                </a>
              </div>
              <div className=" gap-4 hidden md:flex">
                {props.portfolioData?.githubLink && (
                  <a
                    href={props.portfolioData?.githubLink}
                    target="_blank"
                    className="hover:text-white"
                  >
                    <AiFillGithub size={32} />
                  </a>
                )}
                {props.portfolioData?.linkedinLink && (
                  <a
                    href={props.portfolioData.linkedinLink}
                    className="hover:text-white"
                    target="_blank"
                  >
                    <AiFillLinkedin size={32} />
                  </a>
                )}

                {props.portfolioData?.instagramLink && (
                  <a
                    href={props.portfolioData?.instagramLink}
                    target="_blank"
                    className="hover:text-white"
                  >
                    <AiFillInstagram size={32} />
                  </a>
                )}
              </div>
            </nav>

            <div className="w-full md:w-[60%] overflow-y-auto [&::-webkit-scrollbar]:hidden">
              {/* Mobile view */}
              <section className="w-full flex md:hidden flex-col mb-12 items-center gap-2">
                <Image
                  src={props.portfolioData?.profileImg}
                  width={100}
                  height={100}
                  className="rounded-full"
                  alt="Profile Image"
                  loading="lazy"
                />
                <h3 className="md:font-bold">
                  &#128075; Hi, I'm {props.portfolioData?.userName}
                </h3>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-300 to-slate-600 bg-clip-text text-transparent">
                  {props.portfolioData?.role}
                </h1>
              </section>
              {/* Mobile view end*/}

              <div className="flex flex-col gap-14 md:gap-20" id="about">
                {/* About */}
                <section className="md:flex flex-col lg:mt-6 md:mt-40 sm:mt-8 lg:h-fit md:h-screen slide-in">
                  <h2 className="text-md md:text-lg font-medium uppercase tracking-widest bg-gradient-to-r from-[#9a9a9a] to-gray-400 bg-clip-text text-transparent mb-6">
                    About
                  </h2>

                  <p className="text-primary-gray md:text-md text-ellipsis">
                    {props.portfolioData?.about}
                  </p>
                </section>
                {/* Experince */}
                <section
                  className="lg:h-fit md:h-screen animate-fadeIn "
                  id="experience"
                >
                  <h2 className="text-md md:text-lg font-medium uppercase tracking-widest bg-gradient-to-r from-[#9a9a9a] to-gray-400 bg-clip-text text-transparent mb-6">
                    Experience
                  </h2>
                  <div className="container mx-2 md:mx-auto">
                    <ol className="ml-[1em] relative border-l border-gray-500/30">
                      {props.portfolioData &&
                        props.portfolioData.experiences &&
                        Array.isArray(props.portfolioData.experiences) &&
                        props.portfolioData?.experiences?.map(
                          (experience, index) => (
                            <li
                              className="pb-10 pl-6 transition motion-reduce:transition-none group md:hover:bg-gray-500/10 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg hover:bg-opacity-10"
                              key={index}
                            >
                              <span className="absolute group-hover:bg-slate-300 flex items-center justify-center w-6 h-6 bg-gray-500/10 rounded-full -left-3 ring-2 ring-gray-500/30 z-3 ">
                                <AiTwotoneCalendar className="group-hover:text-black" />
                              </span>

                              <h3 className="flex  gap-2 mb-1 text-md font-semibold whitespace-nowrap text-gray-400 group-hover:text-white ">
                                <time className="">{experience.tenure}</time>
                                <span>&#8226;</span>
                                <span>{experience.company}</span>
                              </h3>
                              <p>{experience.designation}</p>
                              <p className="mb-4 text-sm font-normal text-primary-gray ">
                                {experience.accomplishments}
                              </p>
                            </li>
                          )
                        )}
                    </ol>
                  </div>
                  {/* Skills */}
                  <section
                    className="lg:h-fit mt-10 animate-fadeIn "
                    id="skills"
                  >
                    <h2 className="text-md md:text-lg font-medium  uppercase tracking-widest bg-gradient-to-r from-[#9a9a9a] to-gray-400 bg-clip-text text-transparent mb-6">
                      Skills
                    </h2>

                    {props.portfolioData &&
                    props.portfolioData?.skills &&
                    props.portfolioData?.skills ? (
                      <div className=" ml-[1em] flex gap-4 flex-wrap">
                        {props.portfolioData?.skills
                          .split(",")
                          .map((skill, index) => (
                            <span className="text-sm  uppercase hover:px-6 tracking-widest transition-all hover:scale-x-200 ease-in-out delay-100  outline outline-1 outline-gray-400 hover:outline-gray-300 rounded-full p-1 px-2 bg-primary-gray text-gray-300 hover:text-gray-200 bg-opacity-20 backdrop-blur-lg ">
                              {skill}
                            </span>
                          ))}
                      </div>
                    ) : (
                      <></>
                    )}
                  </section>
                </section>

                {/* Projects */}
                <section
                  id="projects"
                  className="flex flex-col gap-4 md:h-fit lg:h-screen animate-fadeIn"
                >
                  <h1 className="text-md md:text-lg font-medium uppercase tracking-widest bg-gradient-to-r from-[#9a9a9a] to-gray-400 bg-clip-text text-transparent">
                    Projects
                  </h1>
                  <div className="flex flex-col sm:mx-2 gap-4">
                    {props.portfolioData?.projects?.map((project, index) => (
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
                            alt="Project Image"
                            className="rounded-lg col-span-6 order-2 md:col-span-2 md:order-1"
                          />
                          <div className="col-span-6 md:order-2 order-1 md:col-span-4">
                            <h2 className="text-md font-bold group-hover:text-white flex gap-2 hover:cursor-pointer">
                              {project.projectName}
                              <AiOutlineLink className="group:hover:text-white mt-1 group-hover:tex" />
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
        )}
        <footer className="flex justify-between m-2 p-2 md:hidden">
          <span className="">
            Created With
            <a href="" className="text-slate-300 mx-1 hover:text-white">
              Portflection
            </a>
          </span>
          <div className="flex gap-4 justify-center">
            {props.portfolioData?.githubLink && (
              <a
                href={props.portfolioData?.githubLink}
                target="_blank"
                className="hover:text-white"
              >
                <AiFillGithub size={24} />
              </a>
            )}

            <a href="linkedin.com" className="hover:text-white">
              <AiFillLinkedin size={24} />
            </a>
            <a href="linkedin.com" className="hover:text-white">
              <AiFillInstagram size={24} />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  portfolioData: state.portfolioData,
  loading: state.loading,
});
const mapDispatchToProps = (dispatch) => ({
  getPortfolio: (userId, meta) => dispatch(getPortfolio(userId, meta)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
