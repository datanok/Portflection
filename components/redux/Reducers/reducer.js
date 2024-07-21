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
  userProfileData: null,
  loading: false,
  providers: null,
  showDialog: false,
  showProfileDialog: false,
  deletePortfolioResult: null,
  showDeleteDialog: false,
};

export const reducer = (state = initialState, action) => {
  if (action.type.includes("pending")) {
    return {
      ...state,
      loading: true,
    };
  } else {
    switch (action.type) {
      case "SET_USER_PROFILE_DATA":
        return { ...state, userProfileData: action.payload };
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
      case types.SET_DELETE_DIALOG:
        return { ...state, showDeleteDialog: action.payload };
      case types.CLEAR_ALERT_MESSAGE:
        return { ...state, deletePortfolioResult: action.payload };
      case `${types.GET_PORTFOLIO}/fulfilled`:
        return {
          ...state,
          portfolioData: action.payload,
          loading: false,
        };
      case `${types.GET_PORTFOLIO}/rejected`:
        return {
          ...state,
          portfolioData: { success: false },
          loading: false,
        };

      case `${types.GET_USER}/fulfilled`:
        return {
          ...state,
          userProfileData: action.payload,
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
      case `${types.DELETE_PORTFOLIO}/fulfilled`:
        return {
          ...state,
          loading: false,
          deletePortfolioResult: action.payload,
        };
      case `${types.DELETE_PORTFOLIO}/rejected`:
        return {
          ...state,
          loading: false,
          deletePortfolioResult: action.payload,
        };

      default:
        return state;
    }
  }
};
