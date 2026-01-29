import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 0,

  profile: {
    fname: "",
    lname: "",
    phone: "",
    address: "",
    url: ""
  },

  education: [],
  skills: [],
  projects: [],
  social: []
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    next: (state) => {
      if (state.step < 5) state.step++;
    },

    back: (state) => {
      if (state.step > 0) state.step--;
    },

    setStep: (state, action) => {
      state.step = action.payload;
    },

    saveProfile: (state, action) => {
      state.profile = action.payload;
    },

    addEducation: (state, action) => {
      state.education.push(action.payload);
    },

    deleteEducation: (state, action) => {
      state.education.splice(action.payload, 1);
    },

    addSkill: (state, action) => {
      state.skills.push(action.payload);
    },

    deleteSkill: (state, action) => {
      state.skills.splice(action.payload, 1);
    },

    addProject: (state, action) => {
      state.projects.push(action.payload);
    },

    deleteProject: (state, action) => {
      state.projects.splice(action.payload, 1);
    },

    addSocial: (state, action) => {
      state.social.push(action.payload);
    },

    saveAll: (state) => {
      localStorage.setItem("resume", JSON.stringify(state));
    },

    loadAll: () => {
      const data = localStorage.getItem("resume");
      return data ? JSON.parse(data) : initialState;
    },

    resetResume: () => initialState
  }
});

export const {
  next,
  back,
  setStep,
  saveProfile,
  addEducation,
  deleteEducation,
  addSkill,
  deleteSkill,
  addProject,
  deleteProject,
  addSocial,
  saveAll,
  loadAll,
  resetResume
} = resumeSlice.actions;

export default resumeSlice.reducer;
