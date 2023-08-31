import {
  selectJobs,
  setNewJobInput,
  selectNewJobInput,
  setNewJob,
} from "../../features/job/jobSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const JobsListInputs = () => {
  const dispatch = useDispatch();
  const jobs = useSelector(selectJobs);
  const newJobInput = useSelector(selectNewJobInput);
  let [inputBoolean, setInputBoolean] = useState(false);

  return (
    <div>
      <h1>List of Jobs</h1>
      {jobs.map((item, index) => {
        return <h2 key={index}>{item}</h2>;
      })}
      {inputBoolean ? (
        <textarea
          onInput={(e) => {
            dispatch(setNewJobInput(e.target.value));
          }}
        ></textarea>
      ) : (
        <></>
      )}
      <button
        onClick={() => {
          dispatch(setNewJob(newJobInput));
          setInputBoolean(!inputBoolean);
        }}
      >
        {inputBoolean ? "Save Job" : "Add a Job"}
      </button>
    </div>
  );
};

export default JobsListInputs;
