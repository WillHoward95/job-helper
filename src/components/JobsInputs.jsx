import JobsList from "./Inputs/JobsList";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import NavBar from "./NavBar";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  selectComparisonTitle,
  setComparisonTitle,
} from "../features/job/jobSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JobsInputs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  let [newComparisonInput, setNewComparisonInput] = useState("");
  const comparison = useSelector(selectComparisonTitle);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const notify = () => {
    toast.error(`Please enter a title`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div className="appContainer">
      <NavBar />
      {/* where the user enters their comparison */}
      <div className="appSection">
        <h2>
          Enter what you would like to compare e.g. Universities, Jobs etc.
        </h2>
        <textarea
          defaultValue={comparison}
          onInput={(e) => {
            setNewComparisonInput(e.target.value);
          }}
          className="job-textarea add-job-textarea"
        ></textarea>
        <button
          onClick={() => {
            if (newComparisonInput) {
              dispatch(setComparisonTitle(newComparisonInput));
              setNewComparisonInput("");
            } else {
              notify();
            }
          }}
          className="button add-button"
        >
          Save comparison
        </button>
      </div>

      {comparison ? (
        <div>
          {" "}
          <JobsList />
          <button
            className="button main-button"
            onClick={() => {
              navigate("/resultstable");
            }}
          >
            Enter Results
          </button>
        </div>
      ) : (
        <></>
      )}

      <ToastContainer pauseOnFocusLoss={false} />
    </div>
  );
};

export default JobsInputs;
