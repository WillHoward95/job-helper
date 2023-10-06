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
  selectJobs,
} from "../features/job/jobSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JobsInputs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  let [newComparisonInput, setNewComparisonInput] = useState("");
  const comparison = useSelector(selectComparisonTitle);
  const jobs = useSelector(selectJobs);

  console.log(comparison);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const notify = (text) => {
    toast.error(text, {
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
    <div>
      <NavBar />
      {/* where the user enters their comparison */}
      <div className="appSection">
        <h2>
          Enter what you would like to compare e.g. Universities, Jobs etc.
        </h2>
        <textarea
          autoFocus
          onInput={(e) => {
            setNewComparisonInput(e.target.value);
          }}
          defaultValue={comparison}
          className="job-textarea add-job-textarea"
        ></textarea>
        <button
          onClick={() => {
            if (newComparisonInput) {
              dispatch(setComparisonTitle(newComparisonInput));
              setNewComparisonInput("");
            } else {
              notify("Please enter a title");
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
              if (jobs.length > 1) {
                navigate("/questionnaire");
              } else {
                notify(
                  `You must add at least one Comparison to progress through to the next page`
                );
              }
            }}
          >
            Begin questionnaire
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
