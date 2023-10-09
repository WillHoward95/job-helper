import ProsQuestionnaire from "./Questionnaire/ProsQuestionnaire";
import ConsQuestionnaire from "./Questionnaire/ConsQuestionnaire";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "./NavBar";

const Questionnaire = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

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
          navigate("/results");
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
    </div>
  );
};

export default Questionnaire;
