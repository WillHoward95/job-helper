import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: ["bartender", "makeup artist"],
  pros: [
    { pro: "good hours", weight: 10 },
    { pro: "good pay", weight: 8 },
  ],
  cons: [
    { con: "bad hours", weight: 10 },
    { con: "bad pay", weight: 8 },
  ],
};

export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setNewJob: (state, action) => {
      state.jobs.push(action.payload);
      state.newJobInput = "";
    },
    setNewPro: (state, action) => {
      state.pros.push(action.payload);
      state.newProInput = "";
    },
    setNewCon: (state, action) => {
      state.cons.push(action.payload);
      state.newConInput = "";
    },
  },
});

export const { setNewJob, setNewPro, setNewCon } = jobSlice.actions;

export const selectJobs = (state) => state.job.jobs;
export const selectPros = (state) => state.job.pros;
export const selectCons = (state) => state.job.cons;

export default jobSlice.reducer;
