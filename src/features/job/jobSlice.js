import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [
    { job: "bartender", pros: [], cons: [], prosTotal: 0, consTotal: 0 },
    { job: "makeup artist", pros: [], cons: [], prosTotal: 0, consTotal: 0 },
  ],
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
    addPro: (state, action) => {
      const jobObject = state.jobs.find((element) => {
        return action.payload.job === element.job;
      });

      jobObject.pros.push(action.payload.pro);
      jobObject.prosTotal += action.payload.weight;
    },
    addCon: (state, action) => {
      const jobObject = state.jobs.find((element) => {
        return action.payload.job === element.job;
      });

      jobObject.cons.push(action.payload.con);
      jobObject.consTotal += action.payload.weight;
    },
    removePro: (state, action) => {
      const jobObject = state.jobs.find((element) => {
        return action.payload.job === element.job;
      });

      const indexOf = jobObject.pros.findIndex((item) => {
        return item === action.payload.pro;
      });

      console.log(indexOf);

      // jobObject.pros.push(action.payload.pro);
      // jobObject.prosTotal += action.payload.weight;
    },
  },
});

export const { setNewJob, setNewPro, setNewCon, addPro, addCon, removePro } =
  jobSlice.actions;

export const selectJobs = (state) => state.job.jobs;
export const selectPros = (state) => state.job.pros;
export const selectCons = (state) => state.job.cons;

export default jobSlice.reducer;
