import {
  selectComparisonTitle,
  selectJobs,
  setNewJob,
  setComparisonTitle,
} from "../../features/job/jobSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import JobsItem from "./JobsItem";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JobsListInputs = () => {
  const dispatch = useDispatch();
  const jobs = useSelector(selectJobs);
  let [inputBoolean, setInputBoolean] = useState(false);
  let [newJobInput, setNewJobInput] = useState("");
  const comparison = useSelector(selectComparisonTitle);

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
    <div className="appSection">
      <h1>{comparison}</h1>
      {/* map over the comparison array and return a JobItem for each one */}
      {jobs.map((item, index) => {
        return <JobsItem index={index} item={item} key={index} />;
      })}
      {/* if the input boolean is true we show a text area for them to enter a new job */}
      {inputBoolean ? (
        <>
          <textarea
            className="job-textarea add-job-textarea"
            autoFocus
            onInput={(e) => {
              setNewJobInput((newJobInput = e.target.value));
            }}
          ></textarea>
          <div className="half-button-container">
            <button
              className="button add-button half-button"
              onClick={() => {
                if (newJobInput) {
                  dispatch(
                    setNewJob({
                      job: newJobInput,
                      pros: [],
                      cons: [],
                      prosTotal: 0,
                      consTotal: 0,
                    })
                  );
                }
                // toast to notify if they haven't enter both a title and value
                if (!newJobInput && inputBoolean) {
                  notify();
                }
                setNewJobInput("");
                setInputBoolean(!inputBoolean);
              }}
            >
              Save
            </button>
            {/* if the input boolean is true add a button that says cancel that turns off the input boolean */}
            {inputBoolean ? (
              <button
                className="button half-button"
                onClick={() => {
                  setInputBoolean(!inputBoolean);
                }}
              >
                Cancel
              </button>
            ) : (
              <></>
            )}
          </div>
        </>
      ) : (
        // if the input boolean is false show a button to add a new job
        <>
          <button
            className="button add-button"
            onClick={() => {
              setNewJobInput("");
              setInputBoolean(!inputBoolean);
            }}
          >
            Add
          </button>
        </>
      )}
    </div>
  );
};

export default JobsListInputs;
