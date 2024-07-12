"use client";
import { useState, useEffect } from "react";
import AboutForm from "./AboutForm";
import ExperienceForm from "./ExperienceForm";
import ContactForm from "./ContactForm";
import ProjectsForm from "./ProjectsForm";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import { connect } from "react-redux";
import {
  setUserData,
  setExperiences,
  setExperienceData,
  setProjectData,
  setProjects,
  setContactData,
  createPortfolio
} from "../redux/Action";

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Loader from "@components/Loader/Loader";
function PortfolioForm(props) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const {
    userData,
    setUserData,
    projects,
    experiences,
    contactData,
    portfolioData,
    setExperiences,
    setProjects,
    setContactData
    
  } = props;

  const { data: session } = useSession();

  
  const isFormValid = () => {
    // Check if all userData fields are not empty and there's at least one experience
    return (
      userData.userName !== "" &&
      userData.about !== "" &&
      userData.role !== "" &&
      experiences.length >= 1
    );
  };

  const submitForm = async () => {
    if (isFormValid()) {
      console.log(userData,"userData")
      const portfolioData = {
        profileImg: userData.profileImg,
        userName: userData.userName,
        about: userData.about,
        role: userData.role,
        skills: userData.skills,
        experiences: experiences,
        projects: projects,
        email: contactData.email,
        githubLink: contactData.githubLink,
        instagramLink: contactData.instagramLink,
        linkedinLink: contactData.linkedinLink,
        userID: session?.user.id,
      };
  
      try {
        await props.createPortfolio({portfolioData, session});
        router.push(`/portfolio/view?id=${session?.user.id}`);
      } catch (error) {
        console.error("Error creating portfolio:", error);
        toast("Failed to create portfolio. Please try again.");
      }
    } else {
      toast("Fields cannot be empty.");
    }
  };
  

  const StepDisplay = () => {
    if (step === 0)
      return <AboutForm userData={userData} setUserData={setUserData} />;
    else if (step === 1) return <ExperienceForm />;
    else if (step === 2) return <ProjectsForm />;
    else return <ContactForm userData={userData} setUserData={setUserData} />;
  };
  useEffect(() => {
    if (portfolioData && Object.keys(portfolioData).length > 0 ) {
      setUserData({
        ...userData,
        userName: portfolioData?.userName,
        role: portfolioData?.role,
        about: portfolioData?.about,
        skills:portfolioData?.skills?.replace(/[\r\n]+/gm, " ")
      });
      if(experiences.length <1){
        setExperiences([...experiences, ...(portfolioData?.experiences || [])]);
      }
      if(projects.length <1){
        setProjects([...projects, ...(portfolioData?.projects || [])]);
      }

      setContactData({
        ...contactData,
        email:portfolioData?.email,
        githubLink:portfolioData?.githubLink,
        instagramLink:portfolioData?.instagramLink,
        linkedinLink:portfolioData?.linkedinLink,

      })

    }
  }, [portfolioData]);

  return (
    <>
     <div className="bg-blue-200 w-full md:w-[80%] lg:w-[60%] p-4 m-2">
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

        <div className="form-container animate-slideInFromRight">
          <div className="body ">{StepDisplay()}</div>
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
                // step === 1 && addExperience(experienceData)
                // step === 2 && addProjects();
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
    {props.loading === true && <Loader/>}
    </> 
  );
}
const mapStateToProps = (state) => ({
  userData: state.userData,
  projects: state.projects,
  contactData: state.contactData,
  experiences: state.experiences,
  portfolioData: state.portfolioData,
  loading: state.loading,
  
  
});

const mapDispatchToProps = {
  setUserData,
  setExperiences,
  setProjects,
  setContactData,
  createPortfolio
};

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioForm);
