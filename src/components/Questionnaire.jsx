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
      <button
        className="button main-button"
        onClick={() => {
          navigate("/");
        }}
      >
        Back to Start
      </button>
    </div>
  );
};

export default Questionnaire;
