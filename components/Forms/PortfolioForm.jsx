"use client";
import { useState } from "react";
import AboutForm from "./AboutForm";
import ExperienceForm from "./ExperienceForm";
import ContactForm from "./ContactForm";
import ProjectsForm from "./ProjectsForm";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
function PortfolioForm() {
  const router = useRouter();
  const [step, setStep] = useState(0);

  const { data: session } = useSession();
  const [userData, setUserData] = useState({
    profileImg: "",
    userName: "",
    about: "",
    role: "",
    skills: "",
    company: "",
    tenure: "",
    designation: "",
    accomplishments: "",
    projectName: "",
    projectDesc: "",
    projectImg: "",
    projectTags: "",
    email: "",
    githubLink: "",
    instagramLink: "",
    linkedinLink: "",
  });
  const [formValid, setformValid] = useState(false);

  const isFormValid = () => {
    // Check if all values in userData are not empty
    return Object.values(userData).every((value) => value !== "");
  };

  const [experiences, setExperiences] = useState([]);
  const [projects, setProjects] = useState([]);
  const submitForm = async () => {
    addExperience();
    console.log(userData);
    if (isFormValid()) {
      const portfolioData = {
        portfolioData: {
          profileImg: userData.profileImg,
          userName: userData.userName,
          about: userData.about,
          role: userData.role,
          skills: userData.skills,
          experiences: experiences,
          projects: projects,
          email: userData.email,
          githubLink: userData.githubLink,
          instagramLink: userData.instagramLink,
          linkedinLink: userData.linkedinLink,
          userID: session?.user.id,
        },
      };

      try {
        const response = await fetch("/api/portfolio/new", {
          method: "POST",
          body: JSON.stringify(portfolioData),
        });
        if (response.ok) {
          router.push(`/portfolio/view?id=${session?.user.id}`);
        }
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    } else {
      console.log("asdas");
      toast("Fields cannot be empty.");
      return;
    }
  };

  const addExperience = () => {
    const newExperience = {
      company: userData.company,
      tenure: userData.tenure,
      designation: userData.designation,
      accomplishments: userData.accomplishments,
    };
    if (
      userData.company.length !== 0 ||
      userData.tenure.length !== 0 ||
      userData.designation.length !== 0 ||
      userData.accomplishments.length !== 0
    ) {
      setExperiences([...experiences, newExperience]);
      setUserData({
        ...userData,
        company: "",
        tenure: "",
        designation: "",
        accomplishments: "",
      });
    }
  };
  const addProjects = () => {
    const newProject = {
      projectName: userData.projectName,
      projectDesc: userData.projectDesc,
      projectTags: userData.projectTags,
      projectImg: userData.projectImg,
    };
    setProjects([...projects, newProject]);
    setUserData({
      ...userData,
      projectName: "",
      projectDesc: "",
      projectTags: "",
      projectImg: "",
    });
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
    else if (step === 2)
      return (
        <ProjectsForm
          userData={userData}
          setUserData={setUserData}
          projects={projects}
          setProjects={setProjects}
          addProjects={addProjects}
        />
      );
    else return <ContactForm userData={userData} setUserData={setUserData} />;
  };
  return (
    <div className="bg-blue-100 w-full md:w-[80%] lg:w-[60%] p-4 m-2">
      <Toaster />
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
            class={`flex md:w-full items-center cursor-pointer ${
              step === 2 ? "text-blue-600" : "after:border-gray-600"
            }  sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-600 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10`}
          >
            <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
              Projects
            </span>
          </li>

          <li
            onClick={() => setStep(3)}
            class={`flex items-center cursor-pointer ${
              step === 3 ? "text-blue-600" : ""
            }`}
          >
            Contact
          </li>
        </ol>

        <div className="form-container">
          <div className="body">{StepDisplay()}</div>
          <div className="footer flex justify-between">
            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="blue"
              disabled={step == 0}
              onClick={() => {
                setStep((currStep) => currStep - 1);
              }}
              className={`flex items-center rounded-full bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out  ${
                step == 0
                  ? "bg-gray-300 text-gray-400  cursor-not-allowed"
                  : "hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              }`}
            >
              <MdKeyboardArrowLeft size={24} />
              Back
            </button>
            <button
              onClick={() => {
                submitForm();
              }}
              className="flex items-center rounded-full bg-blue-600 hover:bg-white hover:text-black px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
            >
              Submit
            </button>
            <button
              disabled={step == 3}
              onClick={() => {
                setStep((currStep) => currStep + 1);
                step === 1 && addExperience();
                step === 2 && addProjects();
              }}
              className={`flex items-center rounded-full bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out  ${
                step == 3
                  ? "bg-gray-300 text-gray-400 cursor-not-allowed"
                  : "hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]  focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              }`}
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
