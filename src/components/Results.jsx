import {
  selectJobs,
  selectPros,
  selectCons,
  selectComparisonTitle,
} from "../features/job/jobSlice";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import NavBar from "./NavBar";

const Results = () => {
  const jobs = useSelector(selectJobs);
  const pros = useSelector(selectPros);
  const cons = useSelector(selectCons);
  const comparison = useSelector(selectComparisonTitle);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  let singularComparison;

  if (comparison[comparison.length - 1] === "s") {
    singularComparison = comparison.slice(0, -1);
  } else {
    singularComparison = comparison;
  }

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
    <div>
      <NavBar />
      <div className="appSection">
        <div className="appSection onboard">
          <p>
            And here are your results! We have organised from highest final
            score to lowest.
          </p>
          <p>
            If you would like to edit your questionnaire answers, simply click
            'Edit Answers' below to return to the questionnaire.
          </p>
          <p>
            Or you can save your answers, so you can pick up where you left off
            next time you visit the site.
          </p>
          <p>
            Or click 'Back to Start' to start again from the
            beginning.&#40;Don't worry, everything you have entered so far will
            still be there&#x29;
          </p>
        </div>
        <h1>Results</h1>
        <table className="resultsTable">
          <thead>
            <tr>
              <th>{singularComparison}</th>
              <th>
                Pros
                <br />
                Total
              </th>
              <th>
                Cons
                <br />
                Total
              </th>
              <th>
                Final
                <br />
                Score
              </th>
            </tr>
          </thead>

          {_jobs.map((item, index) => {
            return (
              <tbody>
                <tr>
                  <td>
                    {index + 1}: {item.job}
                  </td>
                  <td>{item.prosTotal}</td>
                  <td>{item.consTotal}</td>
                  <td>{item.finalTotal}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
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
              localStorage.setItem("job-helper-comparison", comparison);
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
            navigate("/prosinputs");
          }}
        >
          Back to Start
        </button>
        <ToastContainer pauseOnFocusLoss={false} />
      </div>
    </div>
  );
};

export default Results;
