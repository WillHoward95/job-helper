import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: ["bartender", "makeup artist"],
  pros: ["good hours", "good pay"],
  cons: ["bad hours", "bad pay"],
};

export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setNewJobInput: (state, action) => {
      state.newJobInput = action.payload;
    },
    setNewJob: (state, action) => {
      state.jobs.push(action.payload);
      state.newJobInput = "";
    },
    setNewProInput: (state, action) => {
      state.newProInput = action.payload;
    },
    setNewPro: (state, action) => {
      state.pros.push(action.payload);
      state.newProInput = "";
    },
    setNewConInput: (state, action) => {
      state.newConInput = action.payload;
    },
    setNewCon: (state, action) => {
      state.cons.push(action.payload);
      state.newConInput = "";
    },
  },
});

export const {
  setNewJobInput,
  setNewJob,
  setNewProInput,
  setNewPro,
  setNewConInput,
  setNewCon,
} = jobSlice.actions;

export const selectJobs = (state) => state.job.jobs;
export const selectPros = (state) => state.job.pros;
export const selectCons = (state) => state.job.cons;
export const selectNewJobInput = (state) => state.job.newJobInput;
export const selectNewProInput = (state) => state.job.newProInput;
export const selectNewConInput = (state) => state.job.newConInput;

export default jobSlice.reducer;
