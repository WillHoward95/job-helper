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
import CheckboxElementPro from "./Questionnaire/CheckboxElementPro";
import CheckboxElementCon from "./Questionnaire/CheckboxElementCon";

const ResultsTable = () => {
  const jobs = useSelector(selectJobs);
  const pros = useSelector(selectPros);
  const cons = useSelector(selectCons);
  const comparison = useSelector(selectComparisonTitle);
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

  console.log(pros, cons, jobs);

  const _jobs = JSON.parse(JSON.stringify(jobs));
  const _pros = JSON.parse(JSON.stringify(pros));
  const _cons = JSON.parse(JSON.stringify(cons));

  _jobs.map((item) => {
    item.finalTotal = item.prosTotal - item.consTotal;
  });

  //   _jobs.sort((obj1, obj2) => {
  //     if (obj1.finalTotal < obj2.finalTotal) {
  //       return 1;
  //     }

  //     if (obj1.finalTotal > obj2.finalTotal) {
  //       return -1;
  //     }

  //     return 0;
  //   });

  const table = [
    _jobs.map((item) => {
      return item.job;
    }),
    _pros.map((item) => {
      return item.pro;
    }),
    _cons.map((item) => {
      return item.con;
    }),
  ];

  console.log(table);

  return (
    <div>
      <NavBar />
      <div className="appSection resultsTable">
        <h1>Results</h1>
        <table>
          <thead>
            <tr>
              <th className="table-highlight" colSpan={2}>
                {comparison.slice(0, comparison.length - 1)}
              </th>
              {_jobs.map((item) => {
                return <th className="table-highlight">{item.job}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="table-highlight">Pros</td>
              <td className="no-wrap table-highlight">Weight</td>
              <td colSpan={_jobs.length}></td>
            </tr>
            {_pros.map((pro, index) => {
              return (
                <tr>
                  <td className="table-highlight">{pro.pro}</td>
                  <td className="table-highlight">{pro.weight}</td>
                  {_jobs.map((job, jobIndex) => {
                    return (
                      <td className="table-highlight">
                        {
                          <CheckboxElementPro
                            pro={pro.pro}
                            weight={pro.weight}
                            job={_jobs[jobIndex].job}
                          />
                        }
                      </td>
                    );
                  })}
                </tr>
              );
            })}
            <tr>
              <td colSpan={2} className="table-highlight">
                Pros Total:
              </td>
              {_jobs.map((job) => {
                return <td className="table-highlight">{job.prosTotal}</td>;
              })}
            </tr>
            <tr>
              <td className="table-highlight">Cons</td>
              <td className="no-wrap table-highlight">Weight</td>
              <td colSpan={_jobs.length}></td>
            </tr>
            {_cons.map((con, index) => {
              return (
                <tr>
                  <td className="table-highlight">{con.con}</td>
                  <td className="table-highlight">{con.weight}</td>
                  {_jobs.map((job, jobIndex) => {
                    return (
                      <td className="table-highlight">
                        {
                          <CheckboxElementCon
                            con={con.con}
                            weight={con.weight}
                            job={_jobs[jobIndex].job}
                          />
                        }
                      </td>
                    );
                  })}
                </tr>
              );
            })}
            <tr>
              <td colSpan={2} className="table-highlight">
                Cons Total:
              </td>
              {_jobs.map((job) => {
                return <td className="table-highlight">{job.consTotal}</td>;
              })}
            </tr>
            <tr className="table-final-score">
              <td colSpan={2} className="table-highlight">
                Final Score:
              </td>
              {_jobs.map((item) => {
                return <td className="table-highlight">{item.finalTotal}</td>;
              })}
            </tr>
          </tbody>
        </table>
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
    </div>
  );
};

export default ResultsTable;
