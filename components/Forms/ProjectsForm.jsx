import { AiOutlineClose } from "react-icons/ai";
import projectimg from "@public/assets/images/project1.png";
import Image from "next/image";
function ProjectsForm({
  userData,
  setUserData,
  projects,
  setProjects,
  addProjects,
}) {
  const removeProject = (projectToremove) => {
    const updatedProjects = projects.filter(
      (project) => project !== projectToremove
    );
    setProjects(updatedProjects);
  };
  const handleTags = (project) => {
    const tags = project.projectTags.split(",");
    return tags;
  };
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-row gap-2 overflow-x-scroll">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex min-w-full  md:min-w-[300px]  md:max-w-[250px] flex-col gap-1 text-gray-600 bg-white p-4 rounded-lg text-sm"
          >
            <span className=" self-end">
              <AiOutlineClose
                className="font-black cursor-pointer text-black"
                onClick={() => removeProject(project)}
              />
            </span>
            {/* <h3 className="text-black">{project?.projectName}</h3>
            <p>{project?.tenure}</p>
            <h3>{project?.projectTags}</h3> */}
            <div className="grid grid-cols-3 md:grid-cols-1">
              <Image
                src={projectimg}
                height={500}
                width={500}
                className=" object-contain h-fit px-2  col-span-1"
              />
              <div className=" flex flex-col col-span-2 md:col-span-auto">
                <span>{project?.projectName}</span>
                <p className=" whitespace-normal">{project?.projectDesc}</p>
              </div>
              <div className="py-2 flex flex-row gap-2 flex-wrap col-span-3 md:col-span-1">
                {handleTags(project).map((tag) => (
                  <span className="p-2 rounded-full text-xs py-1 px-3 leading-5 bg-teal-400/50 text-teal-800">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div class="mb-6">
        <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 ">
          Project Name
        </label>
        <input
          type="text"
          id="projectname"
          onChange={(e) =>
            setUserData({ ...userData, projectName: e.target.value })
          }
          value={userData.projectName}
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="Name of your Project"
          required
        ></input>
      </div>
      <div class="mb-6">
        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900 "
        >
          Project Description
        </label>
        <textarea
          id="message"
          rows="4"
          value={userData.projectDesc}
          onChange={(e) =>
            setUserData({ ...userData, projectDesc: e.target.value })
          }
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-400 focus:border-red-400"
          placeholder="Small Description About Project..."
        ></textarea>
      </div>
      <div class="mb-6">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 "
        >
          Project Tags
        </label>
        <input
          type="text"
          value={userData.projectTags}
          id="name"
          onChange={(e) =>
            setUserData({ ...userData, projectTags: e.target.value })
          }
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="Enter tags seperated by a comma ',' (Optional)"
        ></input>
      </div>
      <div className="mb-6">
        <label
          class="block mb-2 text-sm font-medium text-gray-900 "
          for="file_input"
        >
          Upload file
        </label>
        <input
          className="file:bg-gray-200 bg-gray-50 w-full  file:text-gray-900 hover:file:bg-sky-200 file:rounded-br-none file:rounded-tr-none hover:border hover:file:-blue-500 file:rounded-lg  file:px-4 file:py-2 file:mr-4 file:border-none hover:cursor-pointer border rounded-lg text-sm text-gray-400"
          id="file_input"
          onChange={(e) =>
            setUserData({ ...userData, projectImg: e.target.value })
          }
          type="file"
        ></input>
      </div>
      <button
        onClick={() => addProjects()}
        className="rounded-full self-center bg-white hover:bg-blue-700 hover:text-white  w-fit px-4 mb-4 p-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      >
        Add Projects
      </button>
    </div>
  );
}

export default ProjectsForm;
