import * as types from './Reducers/types'
import { createAsyncThunk } from '@reduxjs/toolkit';

export const setUserData = (userData) => ({
    type: types.SET_USER_DATA,
    payload: userData 
})

export const setExperiences = (experience) => ({
    type: types.SET_EXPERIENCE,
    payload: experience 
})

export const setProjects = (project) => ({
    type: types.SET_PROJECTS,
    payload: project 
})
export const setProjectData = (project) => ({
    type: types.SET_PROJECT_DATA,
    payload: project 
})
export const setContactData = (payload) => ({
    type: types.SET_CONTACT_DATA,
    payload: payload 
})
export const setExperienceData = (payload) => ({
    type: types.SET_EXPERIENCE_DATA,
    payload: payload 
})
export const setProviders = (payload) => ({
  type: types.SET_PROVIDERS,
  payload: payload 
})
export const setDialog = (payload) => ({
  type: "SET_DIALOG",
  payload: payload 
})

export const getPortfolio = createAsyncThunk(
    types.GET_PORTFOLIO,
    async (userId, { dispatch }) => {
      const apiUrl = `/api/portfolio/view/${userId}`;
      try {
        
        const response = await fetch(apiUrl);
        const data = await response.json()
        return data;
      } catch (err) {
        throw err;
      }
    }
  );

  export const createPortfolio = createAsyncThunk(
    types.CREATE_PORTFOLIO, // Action type
    async ({ portfolioData, session }, { dispatch }) => { // Payload creator function
      const apiUrl = "/api/portfolio/new"; // API endpoint
      
      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          body: JSON.stringify(portfolioData),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      } catch (error) {
        console.error("Fetch Error:", error);
        throw error; // This will trigger the rejected action
      }
    }
  );


  