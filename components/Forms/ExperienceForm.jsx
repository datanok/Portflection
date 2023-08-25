import { AiOutlineClose } from "react-icons/ai";

function ExperienceForm({
  userData,
  setUserData,
  experiences,
  setExperiences,
  addExperience,
}) {
  const removeExperience = (experienceToremove) => {
    const updatedExp = experiences.filter(
      (experience) => experience !== experienceToremove
    );
    setExperiences(updatedExp);
  };
  return (
    <div className="flex flex-col justify-center">
      {/* Experience Preview */}
      <div className="flex flex-row gap-2 overflow-x-scroll whitespace-normal">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="flex min-w-full  md:min-w-[250px]  md:max-w-[250px] flex-col gap-1  text-gray-600 bg-white p-4 rounded-lg text-sm"
          >
            <span className=" self-end">
              <AiOutlineClose
                className="font-black cursor-pointer text-black"
                onClick={() => removeExperience(experience)}
              />
            </span>
            <div className="">
              <h3 className="text-black">{experience.company}</h3>
              <p>{experience.tenure}</p>
              <h3>{experience.designation}</h3>
              <p className=" whitespace-normal ">
                {experience.accomplishments}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div class="mb-6">
        <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 ">
          Company Name
        </label>
        <input
          type="text"
          value={userData.company}
          onChange={(e) =>
            setUserData({ ...userData, company: e.target.value })
          }
          id="company"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="Company Name"
          required
        ></input>
      </div>
      <div class="mb-6">
        <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 ">
          Tenure
        </label>
        <input
          type="text"
          onChange={(e) => setUserData({ ...userData, tenure: e.target.value })}
          value={userData.tenure}
          id="tenure"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="Eg. 2021 - 2022 or 2022 - Present"
          required
        ></input>
      </div>
      <div class="mb-6">
        <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 ">
          Designation
        </label>
        <input
          type="text"
          onChange={(e) =>
            setUserData({ ...userData, designation: e.target.value })
          }
          value={userData.designation}
          id="company"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="Designation or Role"
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
          id="message"
          onChange={(e) =>
            setUserData({ ...userData, accomplishments: e.target.value })
          }
          value={userData.accomplishments}
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-400 focus:border-red-400"
          placeholder="Achievements of your Job..."
        ></textarea>
      </div>
      <button
        onClick={() => addExperience()}
        className="rounded-full self-center bg-white hover:bg-blue-700 hover:text-white  w-fit px-4 mb-4 p-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      >
        add experience
      </button>
    </div>
  );
}

export default ExperienceForm;
