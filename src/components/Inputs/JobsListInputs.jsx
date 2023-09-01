import { selectJobs, setNewJob } from "../../features/job/jobSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const JobsListInputs = () => {
  const dispatch = useDispatch();
  const jobs = useSelector(selectJobs);
  let [inputBoolean, setInputBoolean] = useState(false);
  let [newJobInput, setNewJobInput] = useState("");

  return (
    <div>
      <h1>List of Jobs</h1>
      {jobs.map((item, index) => {
        return <h2 key={index}>{item.job}</h2>;
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
        onClick={() => {
          dispatch(
            setNewJob({
              job: newJobInput,
              pros: [],
              cons: [],
              prosTotal: 0,
              consTotal: 0,
            })
          );
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
