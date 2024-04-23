import * as types from './Reducers/types'

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



