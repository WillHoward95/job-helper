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

  // console.log(jobs);

  const _jobs = JSON.parse(JSON.stringify(jobs));

  _jobs.map((item) => {
    item.finalTotal = item.prosTotal - item.consTotal;
  });

  _jobs.sort((obj1, obj2) => {
    if (obj1.finalTotal < obj2.finalTotal) {
      return 1;
    }

    if (obj1.finalTotal > obj2.finalTotal) {
      return -1;
    }

    return 0;
  });

  return (
    <div className="appSection">
      <h1>Results</h1>
      {_jobs.map((item, index) => {
        return (
          <div key={index} className="appSection resultsSection">
            <p>Job: {item.job}</p>
            <p>Pros Score: {item.prosTotal}</p>
            <p>Cons Score: {item.consTotal}</p>
            <p>Final Score: {item.finalTotal}</p>
          </div>
        );
      })}
      <button
        className="button main-button"
        onClick={() => {
          dispatch(removeProsCons());
          navigate("/inputs");
        }}
      >
        Edit Answers
      </button>
      <button
        className="button main-button"
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
