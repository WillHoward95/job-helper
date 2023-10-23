import ProsQuestionnaire from "./Questionnaire/ProsQuestionnaire";
import ConsQuestionnaire from "./Questionnaire/ConsQuestionnaire";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "./NavBar";
import { selectUserObj } from "../features/job/jobSlice";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Questionnaire = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const userObj = useSelector(selectUserObj);

  console.log(userObj);

  const notify = (text) => {
    toast.error(text, {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <NavBar />
      <div className="appSection">
        <p className="appSection onboard">
          Now it's time to give your answers. Simply click the smiley/frowney
          face if you believe a pro/con applies to each job/course/business
          idea.
        </p>
        <ProsQuestionnaire />
        <ConsQuestionnaire />
      </div>
      <button
        className="button main-button"
        onClick={() => {
          if (
            localStorage.getItem("counter") &&
            localStorage.getItem("counter") > 0
          ) {
            localStorage.setItem(
              "counter",
              localStorage.getItem("counter") - 1
            );
            navigate("/results");
          } else if (
            localStorage.getItem("counter") &&
            localStorage.getItem("counter") < 1
          ) {
            notify(
              "You have run out of free uses, please contact alan@brightspark.coach for more"
            );
          } else {
            localStorage.setItem("counter", userObj.uses - 1);
            navigate("/results");
          }
        }}
      >
        Get Results
      </button>
      <div className="table-layout">
        <button
          className="button main-button back-button"
          onClick={() => {
            navigate("/prosinputs");
          }}
        >
          Back to Pros
        </button>
        <button
          className="button main-button back-button back-button-middle"
          onClick={() => {
            navigate("/consinputs");
          }}
        >
          Back to Cons
        </button>
        <button
          className="button main-button back-button"
          onClick={() => {
            navigate("/jobsinputs");
          }}
        >
          Back to <span className="nobreak">Comparisons</span>
        </button>
      </div>
      <ToastContainer pauseOnFocusLoss={false} />
    </div>
  );
};

export default Questionnaire;
