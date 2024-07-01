import * as types from "./types";
const initialState = {
  userData: {
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
  experiences: [],
  projectData: {
    projectName: "",
    projectDesc: "",
    projectImg: "",
    projectTags: "",
  },
  contactData: {
    email: "",
    githubLink: "",
    instagramLink: "",
    linkedinLink: "",
  },
  projects: [],
  portfolioData: null,
  loading: false,
  providers: null,
  showDialog: false,
  showProfileDialog:false,
};

export const reducer = (state = initialState, action) => {
  if (action.type.includes("pending")) {
    state.loading = true;
  } else {
    switch (action.type) {
      case "SET_USER_DATA":
        return { ...state, userData: action.payload };
      case "SET_EXPERIENCE":
        return { ...state, experiences: action.payload };
      case types.SET_PROVIDERS:
        return { ...state, loading: false, providers: action.payload };
      case "SET_DIALOG":
        return { ...state, showDialog: action.payload };
      case "SET_PROFILE_DIALOG":
        return { ...state, showProfileDialog: action.payload };
      
      case types.SET_PROJECTS:
        return { ...state, projects: action.payload };
      case types.SET_PROJECT_DATA:
        return { ...state, projectData: action.payload };
      case types.SET_CONTACT_DATA:
        return { ...state, contactData: action.payload };
      case types.SET_EXPERIENCE_DATA:
        return { ...state, experienceData: action.payload };
      case `${types.GET_PORTFOLIO}/fulfilled`:
        return {
          ...state,
          portfolioData: action.payload,
          loading: false,
        };
      case `${types.CREATE_PORTFOLIO}/pending`:
        return {
          ...state,
          loading: true,
        };
      case `${types.CREATE_PORTFOLIO}/fulfilled`:
        return {
          ...state,
          loading: false,
        };

      default:
        return state;
    }
  }
};
