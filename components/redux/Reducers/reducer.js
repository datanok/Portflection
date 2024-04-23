import * as types from './types'
const initialState = {
    userData:{
        profileImg: "",
        userName: "",
        about: "",
        role: "",
        skills: "",
        
      },
      experienceData: {
        company: "",
        tenure: "",
        designation: "",
        accomplishments: "",
      },
      experiences :[],
      projectData: {
        projectName: "",
        projectDesc: "",
        projectImg: "",
        projectTags: "",
      },
      contactData : {
        email: "",
        githubLink: "",
        instagramLink: "",
        linkedinLink: "",
      },
      projects:[]
}

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case "SET_USER_DATA":
      return { ...state, userData: action.payload };
    case "SET_EXPERIENCE":
      return { ...state, experiences: action.payload };
    case types.SET_PROJECTS:
      return { ...state, projects: action.payload };
    case types.SET_PROJECT_DATA:
      return { ...state, projectData: action.payload };
    case types.SET_CONTACT_DATA:
      return { ...state, contactData: action.payload };
    case types.SET_EXPERIENCE_DATA:
      return { ...state, experienceData: action.payload };

    default:
      return state
  }
    
}