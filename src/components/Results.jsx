import { selectJobs, selectPros, selectCons } from "../features/job/jobSlice";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const Results = () => {
  const jobs = useSelector(selectJobs);
  const pros = useSelector(selectPros);
  const cons = useSelector(selectCons);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const notifySuccess = () => {
    toast.success(`Answers Saved`, {
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

  const notifyError = () => {
    toast.error(`Answers have not been saved`, {
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
            <h3>Job: {item.job}</h3>
            <p>Pros Score: {item.prosTotal}</p>
            <p>Cons Score: {item.consTotal}</p>
            <h3>Final Score: {item.finalTotal}</h3>
          </div>
        );
      })}
      <button
        className="button main-button"
        onClick={() => {
          navigate("/questionnaire");
        }}
      >
        Edit Answers
      </button>
      <button
        className="button main-button"
        onClick={() => {
          try {
            localStorage.setItem("job-helper-jobs", JSON.stringify(jobs));
            localStorage.setItem("job-helper-pros", JSON.stringify(pros));
            localStorage.setItem("job-helper-cons", JSON.stringify(cons));
            notifySuccess();
          } catch (error) {
            console.log(error);
            notifyError();
          }
        }}
      >
        Save Answers
      </button>
      <button
        className="button main-button"
        onClick={() => {
          navigate("/inputs");
        }}
      >
        Back to Start
      </button>
      <ToastContainer pauseOnFocusLoss={false} />
    </div>
  );
};

export default Results;
