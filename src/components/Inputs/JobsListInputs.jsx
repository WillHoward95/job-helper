import { selectJobs, setNewJob } from "../../features/job/jobSlice";
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

  const notify = () => {
    toast.error(`Please enter a title for the job`, {
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
      <h1>Jobs</h1>
      {jobs.map((item, index) => {
        return <JobsItem index={index} item={item} key={index} />;
      })}
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
                if (!newJobInput && inputBoolean) {
                  notify();
                }
                setNewJobInput("");
                setInputBoolean(!inputBoolean);
              }}
            >
              Save Job
            </button>
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
        <>
          <button
            className="button add-button"
            onClick={() => {
              setNewJobInput("");
              setInputBoolean(!inputBoolean);
            }}
          >
            Add a Job
          </button>
        </>
      )}
    </div>
  );
};

export default JobsListInputs;
