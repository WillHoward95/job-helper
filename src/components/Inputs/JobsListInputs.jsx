import { selectJobs, setNewJob } from "../../features/job/jobSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import JobsItem from "./JobsItem";

const JobsListInputs = () => {
  const dispatch = useDispatch();
  const jobs = useSelector(selectJobs);
  let [inputBoolean, setInputBoolean] = useState(false);
  let [newJobInput, setNewJobInput] = useState("");

  return (
    <div className="appSection">
      <h1>Jobs</h1>
      {jobs.map((item, index) => {
        return <JobsItem index={index} item={item} key={index} />;
      })}
      {inputBoolean ? (
        <textarea
          autoFocus
          onInput={(e) => {
            setNewJobInput((newJobInput = e.target.value));
          }}
        ></textarea>
      ) : (
        <></>
      )}
      <button
        className="button"
        onClick={() => {
          if (inputBoolean) {
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
          setNewJobInput("");
          setInputBoolean(!inputBoolean);
        }}
      >
        {inputBoolean ? "Save Job" : "Add a Job"}
      </button>
    </div>
  );
};

export default JobsListInputs;
