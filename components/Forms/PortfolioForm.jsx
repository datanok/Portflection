"use client";
import { useState } from "react";
import AboutForm from "./AboutForm";
import ExperienceForm from "./ExperienceForm";
import ProjectsForm from "./ProjectsForm";
import { useRouter } from "next/navigation";

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
function PortfolioForm() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const FormTitles = ["About You", "Experience", "Projects"];
  const [experiences, setExperiences] = useState([]);
  const [userData, setUserData] = useState({
    userName: "",
    about: "",
    role: "",
    companyName: "",
    tenure: "",
    designation: "",
    accomplishments: "",
  });

  const submitForm = () => {
    const portfolioData = {
      userName: userData.userName,
      about: userData.about,
      role: userData.role,
      experiences: experiences,
    };
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("portfolioData", JSON.stringify(portfolioData));
    }
    router.push("/create");
  };

  const addExperience = () => {
    const newExperience = {
      company: userData.company,
      tenure: userData.tenure,
      designation: userData.designation,
      accomplishments: userData.accomplishments,
    };

    setExperiences([...experiences, newExperience]);
  };

  const StepDisplay = () => {
    if (step === 0)
      return <AboutForm userData={userData} setUserData={setUserData} />;
    else if (step === 1)
      return (
        <ExperienceForm
          userData={userData}
          setUserData={setUserData}
          experiences={experiences}
          setExperiences={setExperiences}
          addExperience={addExperience}
        />
      );
    else return <ProjectsForm userData={userData} setUserData={setUserData} />;
  };
  return (
    <div className="bg-blue-100 w-full p-4 m-2">
      <div className="progressbar">
        <ol class="flex items-center w-full text-sm font-medium p-6 text-center text-gray-500 dark:text-gray-400 sm:text-base">
          <li
            onClick={() => setStep(0)}
            class={`flex md:w-full items-center cursor-pointer ${
              step === 0 ? "text-blue-600" : "after:border-gray-600"
            }  sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-600 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10`}
          >
            <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
              About<span class=" sm:inline-flex sm:ml-2">You</span>
            </span>
          </li>
          <li
            onClick={() => setStep(1)}
            class={`flex md:w-full items-center cursor-pointer ${
              step === 1 ? "text-blue-600" : "after:border-gray-600"
            }  sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-600 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10`}
          >
            <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
              Experience
            </span>
          </li>
          <li
            onClick={() => setStep(2)}
            class={`flex items-center cursor-pointer ${
              step === 2 ? "text-blue-600" : ""
            }`}
          >
            Projects
          </li>
        </ol>

        <div className="form-container">
          <div className="header">
            <h1>{FormTitles[step]}</h1>
          </div>
          <div className="body">{StepDisplay()}</div>
          <div className="footer flex justify-between">
            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              disabled={step == 0}
              onClick={() => {
                setStep((currStep) => currStep - 1);
              }}
              className="flex items-center rounded bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              <MdKeyboardArrowLeft size={24} />
              Back
            </button>
            <button
              onClick={() => submitForm()}
              className="flex items-center rounded bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              Submit
            </button>
            <button
              onClick={() => {
                setStep((currStep) => currStep + 1);
                step === 1 && addExperience();
              }}
              className="flex items-center rounded bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              Next
              <MdKeyboardArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioForm;
