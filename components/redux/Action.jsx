import * as types from "./Reducers/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const setUserData = (userData) => ({
  type: types.SET_USER_DATA,
  payload: userData,
});

export const setExperiences = (experience) => ({
  type: types.SET_EXPERIENCE,
  payload: experience,
});

export const setProjects = (project) => ({
  type: types.SET_PROJECTS,
  payload: project,
});
export const setProjectData = (project) => ({
  type: types.SET_PROJECT_DATA,
  payload: project,
});
export const setContactData = (payload) => ({
  type: types.SET_CONTACT_DATA,
  payload: payload,
});
export const setExperienceData = (payload) => ({
  type: types.SET_EXPERIENCE_DATA,
  payload: payload,
});
export const setProviders = (payload) => ({
  type: types.SET_PROVIDERS,
  payload: payload,
});
export const setDialog = (payload) => ({
  type: "SET_DIALOG",
  payload: payload,
});
export const setProfileDialog = (payload) => ({
  type: "SET_PROFILE_DIALOG",
  payload: payload,
});
export const setUserDProfileData = (payload) => ({
  type: "SET_USER_PROFILE_DATA",
  payload: payload,
});
export const setShowDeleteDialog = (payload) => ({
  type: types.SET_DELETE_DIALOG,
  payload: payload,
});

export const getPortfolio = createAsyncThunk(
  types.GET_PORTFOLIO,
  async (userId, { dispatch }) => {
    const apiUrl = `/api/portfolio/view/${userId}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data;
    } catch (err) {
      throw err;
    }
  }
);
export const getUser = createAsyncThunk(
  types.GET_USER,
  async (id, { dispatch }) => {
    const apiUrl = `/api/user`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data;
    } catch (err) {
      throw err;
    }
  }
);

export const deleteUser = createAsyncThunk(
  types.DELETE_PORTFOLIO,
  async (_, { rejectWithValue }) => {
    const apiUrl = `/api/portfolio/delete`;

    try {
      const response = await fetch(apiUrl, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data);
      }

      return data;
    } catch (err) {
      return rejectWithValue({
        success: false,
        message: "An error occurred",
        error: err.message,
      });
    }
  }
);

export const createPortfolio = createAsyncThunk(
  types.CREATE_PORTFOLIO, // Action type
  async ({ portfolioData, session }, { dispatch }) => {
    // Payload creator function
    const apiUrl = "/api/portfolio/new"; // API endpoint
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(portfolioData),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Fetch Error:", error);
      throw error; // This will trigger the rejected action
    }
  }
);
