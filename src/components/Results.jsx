import { selectJobs, selectPros, selectCons } from "../features/job/jobSlice";
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
      <NavBar />
      <h1>Results</h1>
      <table>
        <thead>
          <tr>
            <th>Job</th>
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
  );
};

export default Results;
