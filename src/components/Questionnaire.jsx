import ProsQuestionnaire from "./Questionnaire/ProsQuestionnaire";
import ConsQuestionnaire from "./Questionnaire/ConsQuestionnaire";
import { useNavigate } from "react-router-dom";

const Questionnaire = () => {
  const navigate = useNavigate();

  return (
    <div>
      <ProsQuestionnaire />
      <ConsQuestionnaire />
      <button
        className="button"
        onClick={() => {
          navigate("/results");
        }}
      >
        Get Results
      </button>
    </div>
  );
};

export default Questionnaire;
