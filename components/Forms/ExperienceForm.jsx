import { AiOutlineClose } from "react-icons/ai";
import {setExperienceData,setExperiences} from '../redux/Action'
import { connect } from "react-redux";

function ExperienceForm(props) {
  const {
    experienceData,
    setExperienceData,
    experiences,
    setExperiences,
  }= props

  const addExperience = () => {
    const newExperience = {
      company: experienceData.company,
      tenure: experienceData.tenure,
      designation: experienceData.designation,
      accomplishments: experienceData.accomplishments,
    };
    if (
      experienceData.company.length !== 0 ||
      experienceData.tenure.length !== 0 ||
      experienceData.designation.length !== 0 ||
      experienceData.accomplishments.length !== 0
    ) {
      setExperiences([...experiences, newExperience]);
      setExperienceData({
        ...experienceData,
        company: "",
        tenure: "",
        designation: "",
        accomplishments: "",
      });
    }
  };
  const removeExperience = (experienceToremove) => {
    const updatedExp = experiences.filter(
      (experience) => experience !== experienceToremove
    );
    setExperiences(updatedExp);
  };
  return (
    <div className="flex flex-col justify-center">
      {/* Experience Preview */}
      {experiences && Array.isArray(experiences)&& experiences.length > 0 && <div className="flex flex-row gap-2 overflow-x-scroll whitespace-normal">
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
      </div>}
      <div class="mb-6">
        <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 ">
          Company Name
        </label>
        <input
          type="text"
          value={experienceData.company}
          onChange={(e) =>
            setExperienceData({ ...experienceData, company: e.target.value })
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
          onChange={(e) => setExperienceData({ ...experienceData, tenure: e.target.value })}
          value={experienceData.tenure}
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
            setExperienceData({ ...experienceData, designation: e.target.value })
          }
          value={experienceData.designation}
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
            setExperienceData({ ...experienceData, accomplishments: e.target.value })
          }
          value={experienceData.accomplishments}
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


const mapStateToProps = (state) => ({
  experienceData: state.experienceData,
  experiences:state.experiences,
  experienceData:state.experienceData,
  
})
const mapDispatchToProps = (dispatch) => ({
  setExperienceData: (value) => dispatch(setExperienceData(value)),
  setExperiences: (value) => dispatch(setExperiences(value)),

});

export default connect(mapStateToProps,mapDispatchToProps)(ExperienceForm);
