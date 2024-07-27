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
  alert: null,
};

// Helper function to handle rejected actions
const handleRejected = (state, action) => {
  const { success, message, noAlert } = action.payload || {};
  const errorMessage = message || "An error occurred";
  return {
    ...state,
    loading: false,
    alert: !noAlert
      ? {
          message: errorMessage,
          success: false,
        }
      : null,
  };
};

export const reducer = (state = initialState, action) => {
  if (/\/pending$/.test(action.type)) {
    return {
      ...state,
      loading: true,
      alert: null,
    };
  }

  switch (action.type) {
    case `${types.GET_PORTFOLIO}/rejected`:
    case `${types.DELETE_PORTFOLIO}/rejected`:
      return handleRejected(state, action);

    case "SET_USER_PROFILE_DATA":
      return { ...state, userProfileData: action.payload };

    case types.SET_USER_DATA:
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

    case types.SHOW_ALERT:
      return {
        ...state,
        alert: action.payload,
      };

    case types.CLEAR_ALERT:
      return {
        ...state,
        alert: null,
      };

    case `${types.GET_PORTFOLIO}/fulfilled`:
      return {
        ...state,
        portfolioData: action.payload.data.data,
        loading: false,
      };

    case `${types.GET_USER}/fulfilled`:
      return {
        ...state,
        userProfileData: action.payload,
        loading: false,
      };

    case `${types.CREATE_PORTFOLIO}/fulfilled`:
      return {
        ...state,
        loading: false,
      };

    case `${types.DELETE_PORTFOLIO}/fulfilled`:
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        alert: {
          message: action.payload.data.message,
          success: action.payload.data.success,
        },
      };

    default:
      return state;
  }
};
