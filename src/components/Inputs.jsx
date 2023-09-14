import React from "react";
import JobsListInputs from "./Inputs/JobsListInputs";
import ProsListInputs from "./Inputs/ProsListInputs";
import ConsListInputs from "./Inputs/ConsListInputs";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { loadSave } from "../features/job/jobSlice";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";

const Inputs = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("job-helper-jobs")) {
      dispatch(
        loadSave({
          jobs: JSON.parse(localStorage.getItem("job-helper-jobs")),
          pros: JSON.parse(localStorage.getItem("job-helper-pros")),
          cons: JSON.parse(localStorage.getItem("job-helper-cons")),
        })
      );
    }
  }, []);

  return (
    <div>
      <JobsListInputs />
      <ProsListInputs />
      <ConsListInputs />
      <button
        className="button"
        onClick={() => {
          navigate("/questionnaire");
        }}
      >
        Begin questionnaire
      </button>
      <ToastContainer pauseOnFocusLoss={false} />
    </div>
  );
};

export default Inputs;
