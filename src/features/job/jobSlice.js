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
    { con: "bad hours", weight: 9 },
    { con: "bad pay", weight: 9 },
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
    addRemovePro: (state, action) => {
      const jobObject = state.jobs.find((element) => {
        return action.payload.job === element.job;
      });

      if (jobObject.pros.includes(action.payload.pro)) {
        const indexOf = jobObject.pros.findIndex((item) => {
          return item === action.payload.pro;
        });

        jobObject.pros.splice(indexOf, 1);
        jobObject.prosTotal -= action.payload.weight;
      } else {
        jobObject.pros.push(action.payload.pro);
        jobObject.prosTotal += action.payload.weight;
      }
    },
    addRemoveCon: (state, action) => {
      const jobObject = state.jobs.find((element) => {
        return action.payload.job === element.job;
      });

      if (jobObject.cons.includes(action.payload.con)) {
        const indexOf = jobObject.cons.findIndex((item) => {
          return item === action.payload.con;
        });

        jobObject.cons.splice(indexOf, 1);
        jobObject.consTotal -= action.payload.weight;
      } else {
        jobObject.cons.push(action.payload.con);
        jobObject.consTotal += action.payload.weight;
      }
    },
    loadSave: (state, action) => {
      if (action.payload.jobs) {
        state.jobs = action.payload.jobs;
      }
      if (action.payload.pros) {
        state.pros = action.payload.pros;
      }
      if (action.payload.cons) {
        state.cons = action.payload.cons;
      }
    },
    editInput: (state, action) => {
      if (action.payload.newJob) {
        const jobObject = state.jobs.find((element) => {
          return action.payload.oldJob === element.job;
        });

        jobObject.job = action.payload.newJob;
      }
    },
    editPros: (state, action) => {
      if (action.payload.oldPro) {
        const proObject = state.pros.find((element) => {
          return action.payload.oldPro === element.pro;
        });

        proObject.pro = action.payload.newPro;

        if (action.payload.newProWeight) {
          proObject.weight = action.payload.newProWeight;
        }
      }
    },
  },
});

export const {
  setNewJob,
  setNewPro,
  setNewCon,
  addPro,
  addCon,
  removePro,
  removeCon,
  addRemovePro,
  addRemoveCon,
  loadSave,
  editInput,
  editPros,
} = jobSlice.actions;

export const selectJobs = (state) => state.job.jobs;
export const selectPros = (state) => state.job.pros;
export const selectCons = (state) => state.job.cons;

export default jobSlice.reducer;
