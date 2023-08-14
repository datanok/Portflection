"use client";
import { useRef, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { BsFillTrashFill } from "react-icons/bs";

const PortfolioForm = () => {
  const [step, setStep] = useState(1);
  const companyRef = useRef(null);
  const tenureRef = useRef(null);
  const designationRef = useRef(null);
  const accomplishmentsRef = useRef(null);
  const [experiences, setExperiences] = useState([]);
  const handleRemoveExperience = (index) => {
    const updatedExperiences = [...experiences];
    updatedExperiences.splice(index, 1);
    setExperiences(updatedExperiences);
  };

  const addedExperiences = () => {
    return (
      <section
        className="py-12 flex flex-col gap-2 h-48 overflow-scroll"
        id="experience"
      >
        {experiences.map((experience, index) => (
          <div key={index}>
            <div className="container mx-auto">
              <div className="grid gap-4">
                <div className="bg-slate-100 hover:bg-slate-200 flex flex-col  gap-2 md:gap-2 p-4 rounded-lg">
                  <div className="flex justify-between">
                    <p className="min-w-fit text-thin text-slate-500">
                      {experience.tenure}
                    </p>
                    <button onClick={() => handleRemoveExperience(index)}>
                      <BsFillTrashFill />
                    </button>
                  </div>

                  <div>
                    <h3 className="text-lg">{experience.company}</h3>
                    <p className="text-slate-600 ">{experience.designation}</p>
                    <p className="text-slate-500 text-ellipsis">
                      {experience.accomplishments}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    );
  };

  const Step2 = () => (
    <div className="mt-4">
      <form>
        <div class="mb-6">
          <label
            for="Name"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Company Name
          </label>
          <input
            type="text"
            ref={companyRef}
            id="companyname"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Company Name"
            required
          ></input>
        </div>
        <div class="mb-6">
          <label
            for="Name"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Tenure
          </label>
          <input
            type="text"
            id="tenure"
            ref={tenureRef}
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Eg. 2021-2022 or 2022-Current"
            required
          ></input>
        </div>
        <div class="mb-6">
          <label
            for="Name"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Designation
          </label>
          <input
            ref={designationRef}
            type="text"
            id="companyname"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Designation or role"
            required
          ></input>
        </div>
        <div class="mb-6">
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Accomplishments
          </label>
          <textarea
            ref={accomplishmentsRef}
            id="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-400 focus:border-red-400"
            placeholder="Small Introduction About you..."
          ></textarea>
        </div>
        <button onClick={() => addExperience()} className="">
          add experience
        </button>
      </form>
    </div>
  );

  const handleNext = () => {
    setStep(step + 1);
    addExperience();
  };

  const handleBack = () => {
    setStep(step - 1);
    addExperience();
  };

  const addExperience = () => {
    // ßevent.preventDefault();
    var newExperience = {
      company: companyRef?.current.value,
      tenure: tenureRef?.current.value,
      designation: designationRef.current.value,
      accomplishments: accomplishmentsRef.current.value,
    };
    setExperiences([...experiences, newExperience]);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;

      default:
        return null;
    }
  };

  return (
    <div className="flex items-start md:pt-24 justify-start h-screen">
      <div className="bg-white z-50 p-6 rounded-lg shadow-md w-full lg:max-w-xl">
        <h2 className="text-lg font-medium mb-4">Step {step} of 3</h2>
        {/* Form navigation stepper */}
        <div>
          <ol class="justify-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
            <li
              class={`flex items-center space-x-2.5 cursor-pointer ${
                step === 1 ? "text-red-400" : "text-gray-500"
              } `}
              onClick={() => setStep(1)}
            >
              <span
                class={`flex items-center justify-center w-8 h-8 ${
                  step === 1
                    ? "bg-red-400 text-white"
                    : "text-gray-500 border border-gray-500"
                }  rounded-full shrink-0 `}
              >
                1
              </span>
              <span>
                <h3 class="font-medium leading-tight">About You</h3>
                {/* <p class="text-sm">Information about you</p> */}
              </span>
            </li>
            <li
              class={`flex items-center space-x-2.5 cursor-pointer ${
                step === 2 ? "text-red-400" : "text-gray-500 "
              } `}
              onClick={() => setStep(2)}
            >
              <span
                class={`flex items-center justify-center w-8 h-8 ${
                  step === 2
                    ? "bg-red-400 text-white"
                    : "text-gray-500 border border-gray-500"
                }  rounded-full shrink-0 `}
              >
                2
              </span>
              <span>
                <h3 class="font-medium leading-tight">Experience</h3>
                {/* <p class="text-sm">Step details here</p> */}
              </span>
            </li>
            <li
              class={`flex items-center space-x-2.5 cursor-pointer ${
                step === 3 ? "text-red-400" : "text-gray-500"
              } `}
              onClick={() => setStep(3)}
            >
              <span
                class={`flex items-center justify-center w-8 h-8 ${
                  step === 3
                    ? "bg-red-400 text-white"
                    : "text-gray-500 border border-gray-500"
                }  rounded-full shrink-0 `}
              >
                3
              </span>
              <span>
                <h3 class="font-medium leading-tight">Projects</h3>
                {/* <p class="text-sm">Step details here</p> */}
              </span>
            </li>
          </ol>
        </div>
        {step === 2 && (
          <div>
            {experiences.length > 0 ? (
              addedExperiences()
            ) : (
              <p>Add experience to display</p>
            )}
          </div>
        )}
        <div>{renderStep()}</div>
        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            type="button"
            disabled={step < 2}
            onClick={() => handleBack()}
            class={`${
              step < 2
                ? "text-gray-500 bg-gray-200 border-gray-500"
                : "text-red-400 hover:bg-red-400 hover:text-white outline outline-red-400 "
            }focus:ring-1 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center`}
          >
            <MdKeyboardArrowLeft size={24} />
            Back
          </button>
          <button
            type="button"
            disabled={step > 2}
            onClick={() => handleNext()}
            class={`${
              step > 2
                ? "text-gray-500 bg-gray-200 border-gray-500"
                : "text-red-400 hover:bg-red-400 hover:text-white outline outline-red-400 "
            }focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center`}
          >
            Next
            <MdKeyboardArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

const Step1 = () => (
  <div>
    <form>
      <div class="mb-6">
        <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 ">
          Name
        </label>
        <input
          type="text"
          id="name"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="Your Name"
          required
        ></input>
      </div>
      <div class="mb-6">
        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900 "
        >
          About You
        </label>
        <textarea
          id="message"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-400 focus:border-red-400"
          placeholder="Small Introduction About you..."
        ></textarea>
      </div>
      <div class="mb-6">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 "
        >
          Your Role
        </label>
        <input
          type="text"
          id="name"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="Eg. Full Stack Web Developer"
          required
        ></input>
      </div>
    </form>
  </div>
);

const Step3 = () => (
  <div>
    <h3 className="text-lg font-medium mb-4">Step 3</h3>
    <div className="mb-4">
      <label
        className="block font-medium mb-2 text-gray-700"
        htmlFor="password"
      >
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        className="w-full border border-gray-400 p-2"
      />
    </div>
  </div>
);

export default PortfolioForm;
