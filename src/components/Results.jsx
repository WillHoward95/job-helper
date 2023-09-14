import {
  selectJobs,
  selectPros,
  selectCons,
  removeProsCons,
} from "../features/job/jobSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Results = () => {
  const jobs = useSelector(selectJobs);
  const pros = useSelector(selectPros);
  const cons = useSelector(selectCons);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(jobs, pros, cons);

  return (
    <div className="appSection">
      <h1>Results</h1>
      {jobs.map((item, index) => {
        return (
          <div key={index} className="appSection">
            <p>Job: {item.job}</p>
            <p>Pros Score: {item.prosTotal}</p>
            <p>Cons Score: {item.consTotal}</p>
            <p>Final Score: {item.prosTotal - item.consTotal}</p>
          </div>
        );
      })}
      <button
        onClick={() => {
          dispatch(removeProsCons());
          navigate("/inputs");
        }}
      >
        Edit Answers
      </button>
      <button
        onClick={() => {
          localStorage.setItem("job-helper-jobs", JSON.stringify(jobs));
          localStorage.setItem("job-helper-pros", JSON.stringify(pros));
          localStorage.setItem("job-helper-cons", JSON.stringify(cons));
        }}
      >
        Save Answers
      </button>
    </div>
  );
};

export default Results;
