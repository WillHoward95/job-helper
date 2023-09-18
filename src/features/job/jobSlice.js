import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  pros: [],
  cons: [],
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
        proObject.weight = action.payload.newProWeight;
      }
    },
    editCons: (state, action) => {
      if (action.payload.oldCon) {
        const conObject = state.cons.find((element) => {
          return action.payload.oldCon === element.con;
        });

        conObject.con = action.payload.newCon;

        if (action.payload.newConWeight) {
          conObject.weight = action.payload.newConWeight;
        }
      }
    },
    deleteItem: (state, action) => {
      if (action.payload.job) {
        const indexOf = state.jobs.findIndex((item) => {
          return item.job === action.payload.job;
        });

        state.jobs.splice(indexOf, 1);
      }
      if (action.payload.pro) {
        const indexOf = state.pros.findIndex((item) => {
          return item.pro === action.payload.pro;
        });

        state.pros.splice(indexOf, 1);
      }
      if (action.payload.con) {
        const indexOf = state.cons.findIndex((item) => {
          return item.con === action.payload.com;
        });

        state.cons.splice(indexOf, 1);
      }
    },
    removeProsCons: (state) => {
      state.jobs.forEach((item) => {
        item.pros = [];
        item.cons = [];
        item.prosTotal = 0;
        item.consTotal = 0;
      });
      console.log(state.jobs);
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
  editCons,
  deleteItem,
  removeProsCons,
} = jobSlice.actions;

export const selectJobs = (state) => state.job.jobs;
export const selectPros = (state) => state.job.pros;
export const selectCons = (state) => state.job.cons;

export default jobSlice.reducer;
