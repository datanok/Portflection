function ProjectsForm({
  userData,
  setUserData,
  projects,
  setProjects,
  addProjects,
}) {
  return (
    <div className="flex flex-col justify-center">
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
          value={userData.projectDescription}
          onChange={(e) =>
            setUserData({ ...userData, projectDescription: e.target.value })
          }
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-400 focus:border-red-400"
          placeholder="Small Introduction About you..."
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
          placeholder="Enter tags sperated by a comma ',' (Optional)"
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
          className="file:bg-gray-200 bg-gray-50 w-full  file:text-gray-900 hover:file:bg-sky-200 file:rounded-br-none file:rounded-tr-none hover:border hover:file:-blue-500 file:rounded-lg  file:px-1 file:py-2 file:mr-4 file:border-none hover:cursor-pointer border rounded-lg text-sm text-gray-400"
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
