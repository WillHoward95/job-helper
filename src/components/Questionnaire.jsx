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
